"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightMenuDrawer = void 0;
class RightMenuDrawer {
    constructor(DS) {
        this.DS = DS;
        this.activeScene = {
            id: "",
            activeAnimationScreenState: "",
            activeEntityMap: "",
            entityMap: {},
            entityMapRaw: {},
            animations: {},
            styleMap: {},
            screenStateAnimationKeys: {},
            rawText: {},
            screenStates: {},
        };
        this.active = false;
        this.animating = false;
        this.currentBorderCollumn = 2;
        this.currentBorderRow = 0;
        this.currentMenuData = [];
        this.currentCollumn = 2;
        this.currentRow = 0;
        this.menuBorderMode = 0;
        this.baseRightBorder = "";
        this.menuBorder = [];
        this.menuBorder2 = [];
        this.baseRightBorder = `
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┓                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                                  
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                               
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛                                      `;
        const baseRightBorder2 = `
┏┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┓                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                                  
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                               
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┃                            ┃                                                   
┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                                      `;
        this.menuBorder = this.baseRightBorder.split("\n");
        this.menuBorder2 = baseRightBorder2.split("\n");
        let i = 0;
        for (const row of this.menuBorder) {
            this.menuBorder[i] = this.DS.dsCom.stylize(row, {
                fg: "Blue",
                dim: true,
            });
            this.menuBorder2[i] = this.DS.dsCom.stylize(this.menuBorder2[i], {
                fg: "Blue",
                dim: true,
            });
            i++;
        }
        this.DS.dsCom.defineMessageStyle("Info", {});
    }
    setActiveMenuScene(metaName, sceneId) {
        this.DS.menuSceneManager.setActiveSceneMeta(metaName);
        this.activeScene = this.DS.menuSceneManager.activeMeta.scene[sceneId];
        const menuData = this.DS.menuSceneManager.activeMeta.scene[sceneId].screenStates["1"];
        this.currentMenuData = menuData;
        this.DS.dsCom.defineMessageStyle("Info", this.activeScene.styleMap[this.activeScene.rawText["1"].styleMap]);
        if (this.active) {
            this._createEntites();
        }
        return this;
    }
    _createEntites() {
        if (this.activeScene.entityLocations) {
            for (const entity of this.activeScene.entityLocations[this.activeScene.activeEntityMap]) {
                this.DS.entityManager.createNewEntity("right-menu", entity.data.data ? entity.data.data : {}, entity.data.entityName, entity.data.type, entity.x, entity.y);
            }
        }
    }
    async popOut() {
        this.active = true;
        this.animating = true;
        while (this.currentBorderCollumn < 50) {
            this.currentCollumn++;
            this.currentBorderCollumn++;
            await this.DS.dsCom.asyncSleep(8);
        }
        this.animating = false;
    }
    async popIn() {
        this.animating = true;
        while (this.currentBorderCollumn > 2) {
            this.currentCollumn--;
            this.currentBorderCollumn--;
            await this.DS.dsCom.asyncSleep(8);
        }
        this.animating = false;
        this.active = false;
    }
    $doSceneAnimations() {
    }
    $doSceneWorldAnimations() {
    }
    $run() { }
    setMenuBorderMode(modes) {
        this.menuBorderMode = modes;
    }
    async $draw() {
        if (!this.active)
            return;
        if (this.menuBorderMode == 0) {
            for (let i = this.currentBorderRow; i < RIGHTMENUHEIGHT; i++) {
                this.DS.dsCom.showAt(this.menuBorder[i], {
                    row: this.currentBorderRow + i,
                    col: this.currentBorderCollumn,
                });
            }
        }
        if (this.menuBorderMode == 1) {
            for (let i = this.currentBorderRow; i < RIGHTMENUHEIGHT; i++) {
                this.DS.dsCom.showAt(this.menuBorder2[i], {
                    row: this.currentBorderRow + i,
                    col: this.currentBorderCollumn,
                });
            }
        }
        let k = 2;
        for (let i = this.currentRow; i < this.currentRow + RIGHTMENUHEIGHT; i++) {
            if (k > RIGHTMENUHEIGHT - 2)
                continue;
            this.DS.dsCom.INFO.showAt(this.currentMenuData[i], {
                row: k,
                col: this.currentCollumn + 1,
            });
            k++;
        }
    }
}
exports.RightMenuDrawer = RightMenuDrawer;
