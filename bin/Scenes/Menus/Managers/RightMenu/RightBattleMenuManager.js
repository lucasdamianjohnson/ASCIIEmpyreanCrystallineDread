"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightBattleMenu = void 0;
class RightBattleMenu {
    constructor(DS) {
        this.DS = DS;
        this.active = true;
        this.currentMenuData = [];
        this.currentCollumn = 2;
        this.currentRow = 0;
        this.baseRightBorder = "";
        this.menuBorder = [];
        this.baseRightBorder = `
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                      
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                                  
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                               
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒                            ▒                                                   
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                      `;
        this.menuBorder = this.baseRightBorder.split("\n");
        let i = 0;
        for (const row of this.menuBorder) {
            this.menuBorder[i] = this.DS.dsCom.stylize(row, { fg: "Cyan", dim: true });
            i++;
        }
    }
    setActiveMenuScene(scene) {
        const menuData = scene.screenStates["1"];
        this.currentMenuData = menuData;
    }
    async popOut() {
        while (this.currentCollumn < 50) {
            this.currentCollumn++;
            await this.DS.dsCom.asyncSleep(15);
        }
    }
    async popIn() {
        while (this.currentCollumn > 2) {
            this.currentCollumn--;
            await (await this.DS.dsCom.asyncSleep(15));
        }
    }
    $run() {
    }
    $draw() {
        if (!this.active)
            return;
        for (let i = this.currentRow; i < RIGHTMENUHEIGHT; i++) {
            this.DS.dsCom.showAt(this.menuBorder[i], { row: this.currentRow + i, col: this.currentCollumn });
        }
        for (let i = this.currentRow; i < RIGHTMENUHEIGHT; i++) {
            this.DS.dsCom.showAt(this.currentMenuData[i], { row: this.currentRow + i + 2, col: this.currentCollumn + 1 });
        }
    }
}
exports.RightBattleMenu = RightBattleMenu;
