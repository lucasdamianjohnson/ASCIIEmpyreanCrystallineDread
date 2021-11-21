"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor(dsCom, DS) {
        this.dsCom = dsCom;
        this.DS = DS;
        this.activeSceneTypes = "level";
        this.hasAnimations = false;
        this.worldHeight = 0;
        this.worldWidth = 0;
        this.sceneTransitiong = false;
        this.currentCollisonMap = [];
        this.currentWorldData = [];
        this.screenWidth = 48;
        this.screenHeight = 17;
        this.currentWorldCollumn = 0;
        this.currentWorldRow = 0;
        this.borderDrawn = false;
        this.borderAnimatng = false;
        this._activeStyleObject = {};
        const t1 = dsCom.stylize("⛯⛯⛯⛯⛯⛯⛯⛯⛯⛯", { fg: "Magenta", dim: true });
        const t2 = dsCom.stylize("⛯⛯⛯⛯⛯⛯⛯⛯⛯⛯⛯", { fg: "Magenta", dim: true });
        const title = dsCom.stylize("★ Empyrean Crystalline Dread ★", {
            bg: "Red",
            fg: "Black",
            dim: true,
        });
        this.title = t1 + title + t2;
        //▒
        const screenBorder = `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`;
        const SBS = dsCom.stylize(screenBorder, { fg: "Blue", dim: true });
        this.screenBorder = `${this.title}
${SBS}`;
    }
    readWorldDataSection(rowStart, rowEnd, colStart, colEnd) {
        if (rowStart == rowEnd) {
            return [this.currentCollisonMap[rowStart].substring(colStart, colEnd)];
        }
        const returnString = [];
        while (rowStart < rowEnd) {
            if (this.currentCollisonMap[rowStart]) {
                if (this.currentCollisonMap[rowStart][colStart]) {
                    returnString.push(this.currentCollisonMap[rowStart][colStart]);
                }
            }
            rowStart++;
        }
        return returnString;
    }
    async checkWorld(direction, x, y) {
        if (direction == "left") {
            if (this.DS.levelManager.activeScene.leftScrene) {
                const leftScrene = this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[this.DS.levelManager.activeScene.leftScrene];
                const rightScene = this.DS.levelManager.activeScene;
                await this.DS.screenTranistions.doScreenTransition("level", rightScene, leftScrene, "left");
                return true;
            }
        }
        if (direction == "right") {
            if (this.DS.levelManager.activeScene.rightScrene) {
                const rightScene = this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[this.DS.levelManager.activeScene.rightScrene];
                const leftScrene = this.DS.levelManager.activeScene;
                await this.DS.screenTranistions.doScreenTransition("level", leftScrene, rightScene, "right");
                return true;
            }
        }
        if (direction == "up") {
            if (this.DS.levelManager.activeScene.topScrene) {
                const topScene = this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[this.DS.levelManager.activeScene.topScrene];
                const bottomScene = this.DS.levelManager.activeScene;
                await this.DS.screenTranistions.doScreenTransition("level", bottomScene, topScene, "up");
                return true;
            }
        }
        if (direction == "down") {
            if (this.DS.levelManager.activeScene.bottomScrene) {
                const bottomScene = this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[this.DS.levelManager.activeScene.bottomScrene];
                const topScene = this.DS.levelManager.activeScene;
                await this.DS.screenTranistions.doScreenTransition("level", topScene, bottomScene, "down");
                return true;
            }
        }
        return false;
    }
    getRelativePosition(x, y) {
        return {
            x: x - this.currentWorldCollumn,
            y: y - this.currentWorldRow,
        };
    }
    setWorldScene(type, data) {
        if (data.rawText["1"].styleMap != "-1") {
            this._activeStyleObject = data.styleMap[data.rawText["1"].styleMap];
        }
        else {
            this._activeStyleObject = {};
        }
        this.DS.dsCom.defineMessageStyle("Raw", this._activeStyleObject);
        if (data.entityLocations) {
            for (const entity of data.entityLocations[data.activeEntityMap]) {
                this.DS.entityManager.createNewEntity(type, entity.data.data ? entity.data.data : {}, entity.data.entityName, entity.data.type, entity.x, entity.y);
            }
        }
        this.currentWorldData = data.screenStates["1"];
        if (type == "level") {
            this.currentCollisonMap = data.collisionMaps["1"];
        }
        this.worldHeight = 20;
        this.worldWidth = 50;
        if ((Object.keys(data.animations).length == 0 &&
            data.screenStateAnimationKeys[data.activeAnimationScreenState] == undefined) ||
            data.activeAnimationScreenState == "") {
            this.hasAnimations = false;
        }
        else {
            this.hasAnimations = true;
        }
    }
    setWorldData(data) {
        this.currentWorldData = data;
        this.worldHeight = 18;
        this.worldWidth = 50;
    }
    async runGameLoop() {
        this.drawInterval = setInterval(async () => {
            this._drawLoop();
        }, DRAWINTERVAL);
        this.logicInterval = setInterval(async () => {
            this._logicLoop();
        }, LOGICINTERVAL);
    }
    async _logicLoop() {
        this.DS.entityManager.$run();
        this._updateMenus();
    }
    async _drawLoop() {
        //  this.dsCom.setRow(0);
        this.dsCom.setRow(0);
        this._drawMenus();
        this.dsCom.setRow(0);
        this.dsCom.showAt(this.screenBorder, { row: 0 });
        let k = 2;
        for (let i = this.currentWorldRow; i < this.currentWorldRow + this.screenHeight; i++) {
            if (!this.currentWorldData[i])
                continue;
            this.dsCom.RAW.showAt(this.currentWorldData[i].substring(this.currentWorldCollumn, this.currentWorldCollumn + this.screenWidth), { row: k, col: 1 }).CLEAR;
            k++;
        }
        if (this.activeSceneTypes == "battle") {
            this.DS.battleDrawer.$draw();
        }
        try {
            this._doWorldAnimations();
            this._doSceneAnimations();
        }
        catch (error) {
            console.log(error);
            process.exit(0);
        }
        this.DS.player.$draw();
        this.DS.entityManager.$draw();
        this.dsCom.setRow(0);
    }
    async _updateMenus() {
        this.DS.menuSceneManager.$run();
    }
    async _drawMenus() {
        this.DS.menuSceneManager.$draw();
    }
    async _doWorldAnimations() {
        if (this.activeSceneTypes == "battle") {
            this.DS.battleSceneManager.$doSceneWorldAnimations();
        }
        if (this.activeSceneTypes == "level") {
            this.DS.levelManager.$doSceneWorldAnimations();
        }
        this.DS.menuSceneManager.$doSceneWorldAnimations();
    }
    async _doSceneAnimations() {
        if (this.activeSceneTypes == "battle") {
            this.DS.battleSceneManager.$doSceneAnimations();
        }
        if (this.activeSceneTypes == "level") {
            this.DS.levelManager.$doSceneAnimations();
        }
        this.DS.menuSceneManager.$doSceneAnimations();
    }
}
exports.Engine = Engine;
