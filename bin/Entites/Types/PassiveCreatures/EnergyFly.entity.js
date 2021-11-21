"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyFlyEntity = void 0;
const Helper_1 = require("../../../Helper/Helper");
//Harmless passive creatures 
class EnergyFlyEntity {
    constructor(data, id, type, x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.tickInterval = 20;
        this.tickCount = 0;
        this.walls = ["|", "*", "_", "-", "(", ")", "=", "█"];
        this.entityWidth = 2;
        this.entityHeight = 2;
        this.fgColor = "Cyan";
        this.animtionInterval = 10;
        this.animtationCount = 0;
        this.keyFrames = [];
        this.currentFrame = 0;
        this.maxFames = 0;
        this.draw = true;
        this.active = true;
        if (data.fgColor) {
            this.fgColor = data.fgColor;
        }
        this._setUpKeyFrames();
    }
    _setUpKeyFrames() {
        this.keyFrames = [
            {
                text: "<O>",
                styleObj: { fg: this.fgColor, dim: true },
                interval: 2,
            },
            {
                text: "<0>",
                styleObj: { fg: this.fgColor, dim: true },
                interval: 1,
            },
            {
                text: "<<>>",
                styleObj: { fg: this.fgColor, bright: true },
                interval: 6,
            },
            {
                text: "<0>",
                styleObj: { fg: this.fgColor, dim: true },
                interval: 1,
            },
            {
                text: "<O>",
                styleObj: { fg: this.fgColor, dim: true },
                interval: 2,
            },
        ];
        this.maxFames = this.keyFrames.length;
    }
    _getProbality(going, value) {
        if (going == "left" && value > 0) {
            return 0.8;
        }
        else if (going == "left") {
            return 0.3;
        }
        if (going == "right" && value < 0) {
            return 0.8;
        }
        else if (going == "right") {
            return 0.3;
        }
        if (going == "up" && value > 0) {
            return 0.8;
        }
        else if (going == "up") {
            return 0.3;
        }
        if (going == "down" && value <= 0) {
            return 0.8;
        }
        else if (going == "down") {
            return 0.3;
        }
        return 0.3;
    }
    _playerCollide() {
    }
    $run() {
        if (!this.active)
            return;
        const xDif = this.x - DS.player.x;
        const yDif = this.y - DS.player.y;
        if (!xDif || !yDif) {
            this._playerCollide();
        }
        if (this.tickCount == 0) {
            if (Helper_1.probability(0.2)) {
                //do nothing
            }
            else {
                if (Helper_1.probability(this._getProbality("right", xDif))) {
                    if (!this._collisionCheck("right") && this.x + 3 < SCREENWIDTH) {
                        this.x++;
                        return;
                    }
                }
                if (Helper_1.probability(this._getProbality("left", xDif))) {
                    if (!this._collisionCheck("left") && this.x != 1) {
                        this.x--;
                        return;
                    }
                }
                if (Helper_1.probability(this._getProbality("up", yDif))) {
                    if (!this._collisionCheck("up") && this.y > 2) {
                        this.y--;
                        return;
                    }
                }
                if (Helper_1.probability(this._getProbality("down", yDif))) {
                    if (this.y - 1 < SCREENHEIGHT) {
                        if (!this._collisionCheck("down")) {
                            this.y++;
                            return;
                        }
                    }
                }
            }
        }
        else {
            this.tickCount--;
        }
    }
    _collisionCheck(going) {
        let hitWall = false;
        let data = [];
        switch (going) {
            case "up":
                try {
                    if (this.y == 2)
                        return true;
                    data = DS.engine.readWorldDataSection(this.y - 3, this.y - 3, this.x - 1, this.x + 1);
                }
                catch (error) {
                    console.log(this.y);
                    console.log(going);
                    console.log(error);
                    DS.dsCom.DIE;
                }
                break;
            case "down":
                try {
                    data = DS.engine.readWorldDataSection(this.y - 1, this.y - 1, this.x - 1, this.x + 1);
                }
                catch (error) {
                    console.log(going);
                    console.log(error);
                    DS.dsCom.DIE;
                }
                break;
            case "right":
                try {
                    data = DS.engine.readWorldDataSection(this.y - 2, this.y + 1, this.x + 3, this.x + 3);
                }
                catch (error) {
                    console.log(going);
                    console.log(error);
                    DS.dsCom.DIE;
                }
                break;
            case "left":
                try {
                    data = DS.engine.readWorldDataSection(this.y - 2, this.y + 2, this.x - 2, this.x - 2);
                }
                catch (error) {
                    console.log(going);
                    console.log(error);
                    DS.dsCom.DIE;
                }
                break;
            default:
                break;
        }
        for (const strings of data) {
            for (const chars of strings) {
                //   DS.dsCom.INFO.showAt(`${going} ${chars}`, { row: 0, col: 80 }).CLEAR;
                if (this.walls.indexOf(chars) > -1) {
                    hitWall = true;
                    //   DS.dsCom.ERROR.showAt("HIT WALL", { row: 4, col: 55 }).CLEAR;
                    continue;
                }
            }
        }
        return hitWall;
    }
    $draw() {
        if (!this.draw)
            return;
        const frame = this.keyFrames[this.currentFrame];
        const text = DS.dsCom.stylize(frame.text, frame.styleObj);
        DS.dsCom.showAt(text, { row: this.y, col: this.x });
        if (this.animtationCount == 0) {
            if (this.currentFrame < this.maxFames - 1) {
                this.currentFrame++;
            }
            else {
                this.currentFrame = 0;
            }
            const newFrame = this.keyFrames[this.currentFrame];
            this.animtationCount = newFrame.interval;
        }
        else {
            this.animtationCount--;
        }
    }
    $destroy() {
    }
}
exports.EnergyFlyEntity = EnergyFlyEntity;
