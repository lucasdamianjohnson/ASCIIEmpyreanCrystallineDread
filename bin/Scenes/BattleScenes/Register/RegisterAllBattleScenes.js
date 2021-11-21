"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAllBattleScenes = void 0;
const RegisterOverWorldBattleScenes_1 = require("./RegisterOverWorldBattleScenes");
const RegisterBattleTransitionFrames_1 = require("./Scenes/RegisterBattleTransitionFrames");
async function RegisterAllBattleScenes() {
    RegisterBattleTransitionFrames_1.RegisterBattleTransitionFrames();
    RegisterOverWorldBattleScenes_1.RegisterOverWorldBattleScenes();
}
exports.RegisterAllBattleScenes = RegisterAllBattleScenes;
