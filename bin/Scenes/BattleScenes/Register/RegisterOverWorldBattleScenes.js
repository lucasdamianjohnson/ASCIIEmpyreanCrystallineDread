"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterOverWorldBattleScenes = void 0;
async function RegisterOverWorldBattleScenes() {
    DS.battleSceneManager.registerSceneMeta("over-world-1")
        .addSceneToMeta("over-world-1", {
        id: "1",
        animations: {},
        screenStateAnimationKeys: {},
        screenStates: {},
        rawText: {
            "1": {
                styleMap: "1",
                map: `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
            }
        },
        styleMap: {
            "1": {
                fg: "Red",
            },
        },
        activeAnimationScreenState: "",
        activeEntityMap: "",
        entityMap: {},
        entityMapRaw: {},
    });
}
exports.RegisterOverWorldBattleScenes = RegisterOverWorldBattleScenes;
