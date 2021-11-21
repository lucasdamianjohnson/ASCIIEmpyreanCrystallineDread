"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelManager = void 0;
class LevelManager {
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
            collisionMapsRaw: {},
            collisionMaps: {},
            screenStateAnimationKeys: [],
            rawText: {},
            screenStates: {},
            bottomScrene: false,
            topScrene: false,
            rightScrene: false,
            leftScrene: false,
        };
        this.activeLevel = { id: "overworld", screens: {} };
        this.levels = {};
    }
    setActiveLevel(name) {
        this.activeLevel = this.levels[name];
    }
    setActiveScene(name, sceneName) {
        this.activeScene = this.levels[name].screens[sceneName];
        this.DS.setWorldScene(this.activeScene);
    }
    registerLevel(name) {
        this.levels[name] = {
            id: name,
            screens: {},
        };
        return this;
    }
    addScreneToLevel(name, screen) {
        for (const entityMapId of Object.keys(screen.entityMapRaw)) {
            const mapTextRaw = screen.entityMapRaw[entityMapId];
            let rows = mapTextRaw.split(/\r\n|\r|\n/);
            const entityMap = screen.entityMap;
            screen.entityLocations = {};
            screen.entityLocations[entityMapId] = [];
            let rowNum = 0;
            for (let r of rows) {
                rowNum++;
                let colNum = 0;
                for (let c of r) {
                    colNum++;
                    if (entityMap[c]) {
                        screen.entityLocations[entityMapId].push({
                            x: colNum - 1, y: rowNum, data: entityMap[c]
                        });
                    }
                }
            }
        }
        for (const collisionMap of Object.keys(screen.collisionMapsRaw)) {
            const mapTextRaw = screen.collisionMapsRaw[collisionMap];
            let rows = mapTextRaw.split(/\r\n|\r|\n/);
            rows.splice(0, 1);
            rows.splice(rows.length - 1, 1);
            let newString = [];
            for (let r of rows) {
                newString.push(r.substring(1, r.length - 1));
            }
            screen.collisionMaps[collisionMap] = newString;
        }
        for (const state of Object.keys(screen.rawText)) {
            const stateText = screen.rawText[state].map;
            let rows = stateText.split(/\r\n|\r|\n/);
            rows.splice(0, 1);
            rows.splice(rows.length - 1, 1);
            let newString = [];
            for (let r of rows) {
                newString.push(r.substring(1, r.length - 1));
            }
            screen.screenStates[state] = newString;
            this.levels[name].screens[screen.id] = screen;
        }
        return this;
    }
}
exports.LevelManager = LevelManager;
