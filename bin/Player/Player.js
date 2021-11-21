"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(dsCom, DS) {
        this.dsCom = dsCom;
        this.DS = DS;
        this.playerData = {
            crystals: {
                red: false,
                blue: false,
                green: false,
                yellow: false,
                magenta: false,
                cyan: false,
            },
        };
        this.x = 23;
        this.y = 14;
        this.gravity = false;
        this.inAir = false;
        this.upKey = "\u001B\u005B\u0041";
        this.leftKey = "\u001B\u005B\u0044";
        this.rightKey = "\u001B\u005B\u0043";
        this.downKey = "\u001B\u005B\u0042";
        this.going = "down";
        this.doneJumping = true;
        this.active = true;
        this.canControl = true;
        this.pt = " / \\ ";
        this.pm = "<{0}>";
        this.pb = " \\ / ";
        this.walls = ["|", "*", "_", "-", "(", ")", "=", "█"];
        this.check = false;
        this.setUpControls();
        this.pt = dsCom.stylize(" /|\\ ", { fg: "Magenta", dim: true });
        const blink = dsCom.CYAN.blink("0");
        const pm1 = dsCom.stylize(`<{`, { fg: "Magenta", bright: true });
        const pm2 = dsCom.stylize(`}>`, { fg: "Magenta", bright: true });
        this.pm = `${pm1}${blink}${pm2}`;
        this.pb = dsCom.stylize(" \\|/", { fg: "Magenta", dim: true });
    }
    setUpControls(gravity = false) {
        this.DS.controlManager.addToKeyHook("left", this._goLeft, this);
        this.DS.controlManager.addToKeyHook("right", this._goRight, this);
        this.DS.controlManager.addToKeyHook("up", this._goUp, this);
        this.DS.controlManager.addToKeyHook("down", this._goDown, this);
    }
    async _goLeft() {
        if (!this.canControl || !this.active)
            return;
        //left
        if (this.x == 1) {
            if (await this.DS.engine.checkWorld("left", this.x, this.y)) {
                this.x = SCREENWIDTH - 4;
            }
        }
        else {
            if (!this._collisionCheck("left")) {
                if (!this.gravity) {
                    this.x--;
                    return;
                }
            }
        }
    }
    async _goRight() {
        if (!this.canControl || !this.active)
            return;
        //right
        if (this.x >= SCREENWIDTH - 4) {
            if (await this.DS.engine.checkWorld("right", this.x, this.y)) {
                this.x = 1;
            }
        }
        else {
            if (!this._collisionCheck("right")) {
                if (!this.gravity) {
                    this.x++;
                    return;
                }
            }
        }
    }
    async _goUp() {
        if (!this.canControl || !this.active)
            return;
        if (this.y == 1) {
            if (await this.DS.engine.checkWorld("up", this.x, this.y)) {
                this.y = 15;
            }
        }
        else {
            if (!this._collisionCheck("up") && !this.inAir && this.doneJumping) {
                if (!this.gravity) {
                    this.y--;
                    return;
                }
            }
        }
    }
    async _goDown() {
        if (!this.canControl || !this.active)
            return;
        //down
        if (this.y >= SCREENHEIGHT - 2) {
            if (await this.DS.engine.checkWorld("down", this.x, this.y)) {
                this.y = 1;
            }
        }
        else {
            if (!this._collisionCheck("down")) {
                if (!this.gravity) {
                    this.y++;
                    return;
                }
            }
        }
    }
    playerGetCrystal(crystal) {
        this.playerData.crystals[crystal] = true;
        const anims = this.DS.levelManager.scenes["overworld"].scene["cyrstal-alter"]
            .animations[crystal];
        let color = "Blue";
        switch (crystal) {
            case "blue":
                color = "Blue";
                break;
            case "red":
                color = "Red";
                break;
            case "yellow":
                color = "Yellow";
                break;
            case "green":
                color = "Green";
                break;
            case "cyan":
                color = "Cyan";
                break;
            case "magenta":
                color = "Magenta";
                break;
        }
        for (const anim of anims) {
            anim.style.fg = color;
        }
        anims[0].style.dim = true;
        anims[0].style.bright = false;
        anims[1].style.bright = true;
        anims[2].style.dim = true;
        anims[2].style.bright = false;
    }
    _collisionCheck(going) {
        let hitWall = false;
        let data = [];
        switch (going) {
            case "up":
                data = this.DS.engine.readWorldDataSection(this.y - 2, this.y - 2, this.x - 1, this.x + 4);
                break;
            case "down":
                data = this.DS.engine.readWorldDataSection(this.y + 2, this.y + 2, this.x - 1, this.x + 4);
                break;
            case "right":
                data = this.DS.engine.readWorldDataSection(this.y - 1, this.y + 2, this.x + 4, this.x + 4);
                break;
            case "left":
                data = this.DS.engine.readWorldDataSection(this.y - 1, this.y + 2, this.x - 2, this.x - 2);
                break;
            default:
                break;
        }
        for (const strings of data) {
            for (const chars of strings) {
                if (this.walls.indexOf(chars) > -1) {
                    hitWall = true;
                    //  this.dsLog.ERROR.showAt("HIT WALL", { row: 4, col: 55 }).CLEAR;
                    continue;
                }
            }
        }
        //  this.dsCom.INFO.showAt(data, { row: 3, col: 55 }).CLEAR;
        return hitWall;
    }
    $draw() {
        if (!this.active)
            return;
        const pos = this.DS.engine.getRelativePosition(this.x, this.y);
        /*     this.dsCom.ERROR.showAt(`${this.x} ${this.y} ${this.going}`, {
          row: 4,
          col: 55,
        }).CLEAR;
     */
        this.dsCom.showAt(this.pt, { row: pos.y + 1, col: pos.x });
        this.dsCom.rdl.cursorTo(process.stdout, pos.x, pos.y + 2);
        process.stdout.write(this.pm);
        this.dsCom.rdl.cursorTo(process.stdout, pos.x, pos.y + 3);
        process.stdout.write(this.pb);
    }
}
exports.Player = Player;
