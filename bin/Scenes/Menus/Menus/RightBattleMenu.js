"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightBattleMenu = void 0;
class RightBattleMenu {
    constructor(data, id, type, x, y, sceneType = "right-menu") {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.tickInterval = 1;
        this.tickCount = 0;
        this.animateDown = false;
        this.currentAnimateDownOptionCount = 0;
        this.animateIn = true;
        this.currentAnimRow = RIGHTMENUHEIGHT - 3;
        this.active = true;
        this.draw = true;
        this.collumn = SCREENWIDTH + 3;
        this.canMove = true;
        this.menuTop = "┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┓";
        this.menuBottom = "┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛";
        this.messageCap = "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫";
        this.barLength = this.messageCap.length;
        this.currentRow = 2;
        this.boxStyle = { bg: "Blue", fg: "Black", dim: true };
        this.style = { fg: "Blue" };
        this.activeStyle = { fg: "Black", bg: "Blue", dim: true };
        this.selectedStyle = { fg: "Black", bg: "Blue", bright: true };
        this.activeScreen = "root";
        this.activeOptionNum = 0;
        this.selectedOptionNum = -1;
        this.menus = {
            root: {
                attack: {
                    id: "attack",
                    row: 3,
                    col: this.collumn,
                    text: "Use Force",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
                spells: {
                    id: "spells",
                    row: 5,
                    col: this.collumn,
                    text: "Cast Spell",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
                items: {
                    id: "items",
                    row: 7,
                    col: this.collumn,
                    text: "Use Item",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
                flee: {
                    id: "flee",
                    row: 9,
                    col: this.collumn,
                    text: "Try To Flee",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
                equip: {
                    id: "equip",
                    row: 11,
                    col: this.collumn,
                    text: "Equip",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
                fearForm: {
                    id: "fearForm",
                    row: 13,
                    col: this.collumn,
                    text: "View Fear Form Info",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
                options: {
                    id: "options",
                    row: 15,
                    col: this.collumn,
                    text: "Options",
                    processedText: [""],
                    selectedText: [""],
                    activeText: [""],
                    trueLength: 0,
                    active: false,
                },
            },
        };
        this.optionMap = {};
        this._styleText();
        this._buildOptionMap();
        this.currentAnimateDownOptionMax = Object.keys(this.menus["root"]).length;
        this._setUpControls();
    }
    _buildOptionMap() {
        for (const optionScreenKey of Object.keys(this.menus)) {
            this.optionMap[optionScreenKey] = {};
            let count = 0;
            for (const optionKey of Object.keys(this.menus[optionScreenKey])) {
                this.optionMap[optionScreenKey][count] =
                    this.menus[optionScreenKey][optionKey].id;
                count++;
            }
        }
    }
    _setUpControls() {
        const self = this;
        DS.menuSceneManager.addKeyControl("right-menu", "up", async () => {
            if (!this.canMove)
                return;
            DS.audioManager.playSFX("blip-1");
            if (this.activeOptionNum != 0) {
                this.activeOptionNum--;
            }
            else {
                this.activeOptionNum =
                    Object.keys(this.optionMap[this.activeScreen]).length - 1;
            }
        });
        DS.menuSceneManager.addKeyControl("right-menu", "down", async () => {
            if (!this.canMove)
                return;
            DS.audioManager.playSFX("blip-1");
            if (this.activeOptionNum !=
                Object.keys(this.optionMap[this.activeScreen]).length - 1) {
                this.activeOptionNum++;
            }
            else {
                this.activeOptionNum = 0;
            }
        });
        DS.menuSceneManager.addCharControl("right-menu", "z", () => {
            if (!this.canMove)
                return;
            DS.audioManager.playSFX("select");
            this._doOption();
        });
        DS.menuSceneManager.addCharControl("right-menu", "x", () => {
            if (!this.canMove)
                return;
            DS.audioManager.playSFX("cancel");
        });
    }
    _doOption() {
        const id = this.optionMap[this.activeScreen][this.activeOptionNum];
        if (id == "attack") {
            this._doAttack();
        }
        if (id == "spells") {
            this._doCastSpell();
        }
        if (id == "items") {
            this._doUseItem();
        }
    }
    _doAttack() {
        this.canMove = false;
        this.selectedOptionNum = 0;
        if (DS.battleManager.battleCursor) {
            DS.battleManager.battleCursor.active = true;
        }
    }
    _doCastSpell() {
    }
    _doUseItem() {
    }
    _getMenuBoxItem(text, styleObj, trueLength) {
        let dataReturn = [];
        dataReturn.push(this.messageCap);
        let stringStart = `┃ ${text}`;
        if (stringStart.length == trueLength - 1) {
            stringStart += "┃";
        }
        else {
            let temp = this.barLength - trueLength - 3;
            while (temp--) {
                stringStart += " ";
            }
            stringStart += "┃";
        }
        stringStart = DS.dsCom.stylize(stringStart, styleObj);
        dataReturn.push(stringStart);
        dataReturn.push(this.messageCap);
        return dataReturn;
    }
    _styleText() {
        this.messageCap = DS.dsCom.stylize(this.messageCap, this.style);
        this.menuTop = DS.dsCom.stylize(this.menuTop, this.boxStyle);
        this.menuBottom = DS.dsCom.stylize(this.menuBottom, this.boxStyle);
        for (const menuScreeKey of Object.keys(this.menus)) {
            for (const menuOptionKey of Object.keys(this.menus[menuScreeKey])) {
                const option = this.menus[menuScreeKey][menuOptionKey];
                option.trueLength = option.text.length;
                option.activeText = this._getMenuBoxItem(option.text, this.activeStyle, option.trueLength);
                option.selectedText = this._getMenuBoxItem(option.text, this.selectedStyle, option.trueLength);
                option.processedText = this._getMenuBoxItem(option.text, this.style, option.trueLength);
            }
        }
    }
    _runAnimateIn() {
        if (this.currentAnimRow > 2) {
            this.currentAnimRow -= 2;
        }
        else {
            this.animateIn = false;
            this.animateDown = true;
        }
    }
    _animaateIn() {
        DS.dsCom.showAt(this.menuTop, {
            row: this.currentAnimRow,
            col: this.collumn,
        });
        DS.dsCom.showAt(this.menuBottom, {
            row: this.currentAnimRow + 1,
            col: this.collumn,
        });
    }
    _runAnimateDown() {
        if (this.currentAnimateDownOptionCount < this.currentAnimateDownOptionMax) {
            this.currentAnimateDownOptionCount++;
        }
        else {
            this.animateDown = false;
        }
    }
    _animateDown() {
        let count = 0;
        let lastRow = 0;
        DS.dsCom.showAt(this.menuTop, {
            row: this.currentRow,
            col: this.collumn,
        });
        for (const menuOptionKey of Object.keys(this.menus["root"])) {
            const option = this.menus["root"][menuOptionKey];
            let show = option.processedText;
            if (option.active) {
                show = option.activeText;
            }
            let k = 0;
            for (const strings of show) {
                DS.dsCom.showAt(strings, {
                    row: option.row + k,
                    col: option.col,
                });
                k++;
            }
            lastRow = option.row;
            count++;
            if (count >= this.currentAnimateDownOptionCount)
                break;
        }
        DS.dsCom.showAt(this.menuBottom, { row: lastRow + 3, col: this.collumn });
    }
    $draw() {
        if (!this.draw || !this.active)
            return;
        if (this.animateIn) {
            this._animaateIn();
            return;
        }
        if (this.animateDown) {
            this._animateDown();
            return;
        }
        for (const menuScreeKey of Object.keys(this.menus)) {
            let lastRow = 0;
            DS.dsCom.showAt(this.menuTop, {
                row: this.currentRow,
                col: this.collumn,
            });
            let optionCount = 0;
            for (const menuOptionKey of Object.keys(this.menus[menuScreeKey])) {
                const option = this.menus[menuScreeKey][menuOptionKey];
                let show = option.processedText;
                if (this.optionMap[this.activeScreen][this.activeOptionNum] == option.id) {
                    show = option.activeText;
                }
                if (this.optionMap[this.activeScreen][this.selectedOptionNum] == option.id) {
                    show = option.selectedText;
                }
                let k = 0;
                for (const strings of show) {
                    DS.dsCom.showAt(strings, {
                        row: option.row + k,
                        col: option.col,
                    });
                    k++;
                }
                optionCount++;
                lastRow = option.row;
            }
            DS.dsCom.showAt(this.menuBottom, { row: lastRow + 3, col: this.collumn });
        }
    }
    $run() {
        if (!this.active)
            return;
        if (this.tickCount == 0) {
            if (this.animateIn) {
                this._runAnimateIn();
            }
            if (this.animateDown) {
                this.tickInterval = 2;
                this._runAnimateDown();
            }
            this.tickCount = this.tickInterval;
        }
        {
            this.tickCount--;
        }
    }
    $destroy() { }
}
exports.RightBattleMenu = RightBattleMenu;
