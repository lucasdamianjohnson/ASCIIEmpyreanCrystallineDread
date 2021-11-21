"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomMenuDrawer = void 0;
class BottomMenuDrawer {
    constructor(DS) {
        this.DS = DS;
        this.animations = {};
        this.animationIntervalMap = {};
        this.screenStateKeyCount = 0;
        this.screenStateKeyTotal = 0;
        this.screenStateAnimationInterval = -1;
        this.screenStateAnimationIntervalCount = -1;
        this.screenStateAnimationActiveID = "";
        this.hasSceneAnimations = false;
        this.hasWorldAnimations = false;
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
        this.active = true;
        this.currentBorderCollumn = 0;
        this.currentBorderRow = SCREENHEIGHT + 3;
        this.currentMenuData = [];
        this.currentCollumn = 0;
        this.currentRow = 0;
        this.baseBottomBorder = "";
        this.menuBorder = [];
        this.drawn = false;
        this.animating = false;
        this.baseBottomBorder = `┃                                                ┃
┃                                                ┃
┃                                                ┃
┃                                                ┃
┃                                                ┃
┃                                                ┃
┃                                                ┃
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛`;
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
        this.DS.dsCom.defineMessageStyle("Warning", this.activeScene.styleMap[this.activeScene.rawText["1"].styleMap]);
        if (this.activeScene.entityLocations) {
            for (const entity of this.activeScene.entityLocations[this.activeScene.activeEntityMap]) {
                this.DS.entityManager.createNewEntity("bottom-menu", entity.data.data ? entity.data.data : {}, entity.data.entityName, entity.data.type, entity.x, entity.y);
            }
        }
        this.screenStateAnimationActiveID = this.activeScene.activeAnimationScreenState;
        this.animations = {};
        this.animationIntervalMap = {};
        if (this.screenStateAnimationActiveID != "" &&
            this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID].length != 0) {
            this.screenStateAnimationInterval =
                this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID][0].inteerval;
            this.screenStateAnimationIntervalCount =
                this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID][0].inteerval;
            this.screenStateKeyCount = 0;
            this.screenStateKeyTotal = this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID].length;
            this.hasSceneAnimations = true;
        }
        else {
            this.screenStateAnimationInterval = -1;
            this.screenStateAnimationIntervalCount = -1;
            this.screenStateKeyCount = 0;
            this.screenStateKeyTotal = 0;
            this.hasSceneAnimations = false;
        }
        this.animations = this.activeScene.animations;
        for (const animKeys of Object.keys(this.activeScene.animations)) {
            const anim = this.activeScene.animations[animKeys];
            const interval = anim[0].interval;
            this.animationIntervalMap[animKeys] = {
                interval: interval,
                count: 0,
                totalFrames: anim.length,
                currentFrame: 0,
            };
        }
        if (Object.keys(this.animationIntervalMap).length > 0) {
            this.hasWorldAnimations = true;
        }
        else {
            this.hasWorldAnimations = false;
        }
        return this;
    }
    $doSceneAnimations() {
        if (!this.active)
            return;
        if (!this.hasSceneAnimations)
            return;
        if (this.screenStateAnimationIntervalCount == 0) {
            if (this.screenStateKeyCount >= this.screenStateKeyTotal - 1) {
                this.screenStateKeyCount = 0;
            }
            else {
                this.screenStateKeyCount++;
            }
            const keyFrame = this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID][this.screenStateKeyCount];
            this.screenStateAnimationIntervalCount = keyFrame.inteerval;
            this.SetWorldData(this.activeScene.screenStates[keyFrame.stateName]);
            if (this.activeScene.rawText[keyFrame.stateName].styleMap != "-1") {
                this.DS.dsCom.defineMessageStyle("Warning", this.activeScene.styleMap[this.activeScene.rawText[keyFrame.stateName].styleMap]);
            }
        }
        else {
            if (this.screenStateAnimationIntervalCount > 0) {
                this.screenStateAnimationIntervalCount--;
            }
        }
    }
    SetWorldData(data) {
        this.currentMenuData = data;
    }
    $doSceneWorldAnimations() {
        if (!this.active)
            return;
        if (!this.hasWorldAnimations)
            return;
        for (const anim of Object.keys(this.animations)) {
            const animCounts = this.animationIntervalMap[anim];
            const animKey = this.animations[anim][animCounts.currentFrame];
            let rowBuf = 0;
            let up = false;
            if (animKey?.animDirection == "up") {
                up = true;
            }
            for (const strings of animKey.animText) {
                const animString = this.DS.dsCom.stylize(strings, animKey.style);
                this.DS.dsCom.showAt(animString, {
                    row: animKey.row + rowBuf,
                    col: animKey.col,
                }).CLEAR;
                if (!up) {
                    rowBuf++;
                }
                else {
                    rowBuf--;
                }
            }
            if (animCounts.count == 0) {
                if (animCounts.currentFrame >= animCounts.totalFrames - 1) {
                    animCounts.currentFrame = 0;
                }
                else {
                    animCounts.currentFrame++;
                }
                animCounts.interval =
                    this.animations[anim][animCounts.currentFrame].interval;
                animCounts.count = animCounts.interval;
            }
            else {
                animCounts.count--;
            }
        }
    }
    $run() { }
    async $draw() {
        if (!this.active)
            return;
        if (!this.drawn || this.animating) {
            for (let i = 0; i < BOTTOMMENUHEIGHT; i++) {
                this.DS.dsCom.showAt(this.menuBorder[i], {
                    row: this.currentBorderRow + i,
                    col: this.currentBorderCollumn,
                });
            }
        }
        let k = this.currentBorderRow;
        for (let i = this.currentRow; i < this.currentRow + BOTTOMMENUHEIGHT; i++) {
            if (k > BOTTOMMENUHEIGHT + this.currentBorderRow - 2)
                continue;
            this.DS.dsCom.WARNING.showAt(this.currentMenuData[i], {
                row: k,
                col: this.currentCollumn + 1,
            });
            k++;
        }
    }
}
exports.BottomMenuDrawer = BottomMenuDrawer;
