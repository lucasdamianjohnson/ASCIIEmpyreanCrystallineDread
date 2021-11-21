"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelManager = void 0;
class LevelManager {
    constructor(DS) {
        this.DS = DS;
        this.animations = {};
        this.animationIntervalMap = {};
        this.screenStateKeyCount = 0;
        this.screenStateKeyTotal = 0;
        this.screenStateAnimationInterval = -1;
        this.screenStateAnimationIntervalCount = -1;
        this.screenStateAnimationActiveID = "";
        this.activeScene = {
            id: "",
            activeAnimationScreenState: "",
            activeEntityMap: "",
            entityMap: {},
            entityMapRaw: {},
            animations: {},
            styleMap: {},
            collisionMapsRaw: {},
            collisionMaps: {},
            screenStateAnimationKeys: {},
            rawText: {},
            screenStates: {},
            bottomScrene: false,
            topScrene: false,
            rightScrene: false,
            leftScrene: false,
        };
        this.activeMeta = {
            id: "overworld",
            scene: {},
        };
        this.scenes = {};
    }
    getScene(sceneId) {
        return this.activeMeta.scene[sceneId];
    }
    setActiveSceneMeta(metaName) {
        this.activeMeta = this.scenes[metaName];
        return this;
    }
    setActiveScene(metaName, sceneId) {
        this.activeScene = this.scenes[metaName].scene[sceneId];
        this.DS.engine.setWorldScene("level", this.activeScene);
        this.animations = {};
        this.animationIntervalMap = {};
        this.screenStateAnimationActiveID =
            this.activeScene.activeAnimationScreenState;
        if (this.screenStateAnimationActiveID != "" &&
            this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID].length != 0) {
            this.screenStateAnimationInterval =
                this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID][0].inteerval;
            this.screenStateAnimationIntervalCount =
                this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID][0].inteerval;
            this.screenStateKeyCount = 0;
            this.screenStateKeyTotal =
                this.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID].length;
        }
        else {
            this.screenStateAnimationInterval = -1;
            this.screenStateAnimationIntervalCount = -1;
            this.screenStateKeyCount = 0;
            this.screenStateKeyTotal = 0;
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
        if (this.screenStateAnimationInterval != -1) {
        }
        return this;
    }
    registerSceneMeta(metaName) {
        this.scenes[metaName] = {
            id: metaName,
            scene: {},
        };
        return this;
    }
    addSceneToMeta(metaName, scene) {
        Promise.all([
            this.DS.sceneProcessor.processSceneStates(scene),
            this.DS.sceneProcessor.processEntityMaps(scene),
            this.DS.sceneProcessor.processCollisionMaps(scene),
        ]);
        this.scenes[metaName].scene[scene.id] = scene;
        return this;
    }
    $doSceneWorldAnimations() {
        if (this.DS.engine.sceneTransitiong)
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
    $doSceneAnimations() {
        if (this.DS.engine.sceneTransitiong)
            return;
        if (this.screenStateAnimationIntervalCount == 0) {
            if (this.screenStateKeyCount >= this.screenStateKeyTotal - 1) {
                this.screenStateKeyCount = 0;
            }
            else {
                this.screenStateKeyCount++;
            }
            const keyFrame = this.DS.levelManager.activeScene.screenStateAnimationKeys[this.screenStateAnimationActiveID][this.screenStateKeyCount];
            this.screenStateAnimationIntervalCount = keyFrame.inteerval;
            this.DS.engine.setWorldData(this.activeScene.screenStates[keyFrame.stateName]);
            if (this.activeScene.rawText[keyFrame.stateName].styleMap != "-1") {
                this.DS.engine._activeStyleObject =
                    this.activeScene.styleMap[this.activeScene.rawText[keyFrame.stateName].styleMap];
            }
            else {
                this.DS.engine._activeStyleObject = {};
            }
            this.DS.dsCom.defineMessageStyle("Raw", this.DS.engine._activeStyleObject);
        }
        else {
            if (this.screenStateAnimationIntervalCount > 0) {
                this.screenStateAnimationIntervalCount--;
            }
        }
    }
}
exports.LevelManager = LevelManager;
