"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomRightMenuDrawer = void 0;
class BottomRightMenuDrawer {
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
        this.currentBorderCollumn = 50;
        this.currentBorderRow = SCREENHEIGHT + 3 - BOTTOMRIGHTMENUHEIGHT;
        //currentBorderRow = SCREENHEIGHT + 3;
        this.currentMenuData = [];
        this.currentCollumn = 2;
        this.currentRow = 0;
        this.baseBottomBorder = "";
        this.menuBorder = [];
        this.animating = true;
        this.drawn = false;
        this.baseBottomBorder = `┃                            ┃                         
┃                            ┃                                                   
┃                            ┃                                                 
┃                            ┃                                                   
┃                            ┃                                                 
┃                            ┃                                                   
┃                            ┃                                                 
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛                                    `;
        this.menuBorder = this.baseBottomBorder.split("\n");
        let i = 0;
        for (const row of this.menuBorder) {
            this.menuBorder[i] = this.DS.dsCom.stylize(row, {
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
        this.DS.dsCom.defineMessageStyle("Error", this.activeScene.styleMap[this.activeScene.rawText["1"].styleMap]);
        if (this.activeScene.entityLocations) {
            for (const entity of this.activeScene.entityLocations[this.activeScene.activeEntityMap]) {
                this.DS.entityManager.createNewEntity("bottom-right-menu", entity.data.data ? entity.data.data : {}, entity.data.entityName, entity.data.type, entity.x, entity.y);
            }
        }
        return this;
    }
    async popDown() {
        if (!this.active) {
            this.active = true;
        }
        this.DS.menuSceneManager.rightMenuDrawer.setMenuBorderMode(1);
        while (this.currentRow < BOTTOMRIGHTMENUHEIGHT) {
            this.currentRow++;
            this.currentBorderRow++;
            await this.DS.dsCom.asyncSleep(30);
        }
    }
    async popUp() {
        while (this.currentRow > SCREENHEIGHT + 3 - BOTTOMRIGHTMENUHEIGHT) {
            this.currentRow--;
            this.currentBorderRow--;
            await this.DS.dsCom.asyncSleep(15);
        }
        this.DS.menuSceneManager.rightMenuDrawer.setMenuBorderMode(0);
        this.active = false;
    }
    $doSceneAnimations() {
    }
    $doSceneWorldAnimations() {
    }
    $run() { }
    async $draw() {
        if (!this.active)
            return;
        if (!this.drawn || this.animating) {
            for (let i = 0; i < BOTTOMRIGHTMENUHEIGHT; i++) {
                this.DS.dsCom.showAt(this.menuBorder[i], {
                    row: this.currentBorderRow + i,
                    col: this.currentBorderCollumn,
                });
            }
            this.drawn == true;
        }
        let k = this.currentBorderRow;
        for (let i = this.currentRow; i < this.currentRow + BOTTOMMENUHEIGHT; i++) {
            if (k > ((BOTTOMMENUHEIGHT + this.currentBorderRow) - 2))
                continue;
            this.DS.dsCom.ERROR.showAt(this.currentMenuData[i], {
                row: k,
                col: this.currentBorderCollumn + this.currentCollumn - 1,
            });
            k++;
        }
    }
}
exports.BottomRightMenuDrawer = BottomRightMenuDrawer;
