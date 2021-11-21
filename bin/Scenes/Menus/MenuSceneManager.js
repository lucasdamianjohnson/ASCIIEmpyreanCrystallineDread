"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSceneManager = void 0;
const RightMenuDrawer_1 = require("./Drawers/RightMenu/RightMenuDrawer");
const BottemMenuDrawer_1 = require("./Drawers/BottemMenu/BottemMenuDrawer");
const BottomRightMenuDrawer_1 = require("./Drawers/BottomRightMenu/BottomRightMenuDrawer");
class MenuSceneManager {
    constructor(DS) {
        this.DS = DS;
        this.animations = {};
        this.animationIntervalMap = {};
        this.screenStateKeyCount = 0;
        this.screenStateKeyTotal = 0;
        this.screenStateAnimationInterval = -1;
        this.screenStateAnimationIntervalCount = -1;
        this.activeMeta = { id: "overworld", scene: {} };
        this.scenes = {};
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
        this.keyControls = {
            up: {},
            left: {},
            right: {},
            down: {},
            enter: {},
        };
        this.charControls = {
            m: {},
            h: {},
            z: {},
            x: {}
        };
        this.rightMenuDrawer = new RightMenuDrawer_1.RightMenuDrawer(DS);
        this.bottomMenuDrawer = new BottemMenuDrawer_1.BottomMenuDrawer(DS);
        this.bottomRightMenuDrawer = new BottomRightMenuDrawer_1.BottomRightMenuDrawer(DS);
        this.DS.controlManager.addToKeyHook("up", async () => {
            for (const controNames of Object.keys(this.keyControls["up"])) {
                for (const func of this.keyControls["up"][controNames]) {
                    await func();
                }
            }
        }, this);
        this.DS.controlManager.addToKeyHook("down", async () => {
            for (const controNames of Object.keys(this.keyControls["down"])) {
                for (const func of this.keyControls["down"][controNames]) {
                    await func();
                }
            }
        }, this);
        this.DS.controlManager.addToKeyHook("left", () => {
            for (const controNames of Object.keys(this.keyControls["left"])) {
                for (const func of this.keyControls["left"][controNames]) {
                    func();
                }
            }
        }, this);
        this.DS.controlManager.addToKeyHook("right", () => {
            for (const controNames of Object.keys(this.keyControls["right"])) {
                for (const func of this.keyControls["right"][controNames]) {
                    func();
                }
            }
        }, this);
        this.DS.controlManager.addToKeyHook("enter", () => {
            for (const controNames of Object.keys(this.keyControls["enter"])) {
                for (const func of this.keyControls["enter"][controNames]) {
                    func();
                }
            }
        }, this);
        this.DS.controlManager.addToCharHook("z", () => {
            for (const controNames of Object.keys(this.charControls["z"])) {
                for (const func of this.charControls["z"][controNames]) {
                    func();
                }
            }
        }, this);
        this.DS.controlManager.addToCharHook("x", () => {
            for (const controNames of Object.keys(this.charControls["x"])) {
                for (const func of this.charControls["x"][controNames]) {
                    func();
                }
            }
        }, this);
        this.DS.controlManager.addToCharHook("m", () => {
            for (const controNames of Object.keys(this.charControls["m"])) {
                for (const func of this.charControls["m"][controNames]) {
                    func();
                }
            }
        }, this);
        this.DS.controlManager.addToCharHook("h", () => {
            for (const controNames of Object.keys(this.charControls["h"])) {
                for (const func of this.charControls["h"][controNames]) {
                    func();
                }
            }
        }, this);
    }
    addKeyControl(id, key, func) {
        this.keyControls[key][id] ? false : (this.keyControls[key][id] = []);
        this.keyControls[key][id].push(func);
    }
    addCharControl(id, key, func) {
        this.charControls[key][id] ? false : (this.charControls[key][id] = []);
        this.charControls[key][id].push(func);
    }
    setActiveSceneMeta(metaName) {
        this.activeMeta = this.scenes[metaName];
        return this;
    }
    setActiveScene(metaName, sceneId) {
        this.activeScene = this.scenes[metaName].scene[sceneId];
        /*     if (this.activeScene.entityLocations) {
              for (const entity of this.activeScene.entityLocations[
                this.activeScene.activeEntityMap
              ]) {
                this.DS.entityManager.createNewEntity(
                  entity.data.data ? entity.data.data : {},
                  entity.data.entityName,
                  entity.data.type,
                  entity.x,
                  entity.y
                );
              }
            } */
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
        ]);
        this.scenes[metaName].scene[scene.id] = scene;
        return this;
    }
    getScene(sceneId) {
        return this.activeMeta.scene[sceneId];
    }
    async $draw() {
        this.bottomMenuDrawer.$draw();
        this.bottomRightMenuDrawer.$draw();
        this.rightMenuDrawer.$draw();
    }
    async $run() {
        this.rightMenuDrawer.$run();
        this.bottomMenuDrawer.$run();
        this.bottomRightMenuDrawer.$run();
    }
    $doSceneAnimations() {
        if (this.rightMenuDrawer.active) {
            //  this.rightMenuDrawer.$doSceneAnimations();
        }
        if (this.bottomMenuDrawer.active) {
            try {
                this.bottomMenuDrawer.$doSceneAnimations();
            }
            catch (error) {
                console.log(error);
                process.exit(0);
            }
        }
        if (this.bottomRightMenuDrawer.active) {
            //    this.bottomRightMenuDrawer.$doSceneAnimations();
        }
    }
    $doSceneWorldAnimations() {
        if (this.rightMenuDrawer.active) {
            //   this.rightMenuDrawer.$doSceneWorldAnimations();
        }
        if (this.bottomMenuDrawer.active) {
            this.bottomMenuDrawer.$doSceneWorldAnimations();
        }
        if (this.bottomRightMenuDrawer.active) {
            //     this.bottomRightMenuDrawer.$doSceneWorldAnimations();
        }
    }
}
exports.MenuSceneManager = MenuSceneManager;
