"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAllMenuScenes = void 0;
const RegisterRightBattleMenu_1 = require("./Battles/RegisterRightBattleMenu");
const RegisterBottomMenuScenes_1 = require("./BottomMenu/RegisterBottomMenuScenes");
const RegisterBottomRightMenuScenes_1 = require("./BottomRightMenu/RegisterBottomRightMenuScenes");
async function RegisterAllMenuScenes() {
    RegisterRightBattleMenu_1.RegisterRightBattleMenu();
    RegisterBottomMenuScenes_1.RegisterBottomMenuScenes();
    RegisterBottomRightMenuScenes_1.RegisterBottomRightMenuScenes();
}
exports.RegisterAllMenuScenes = RegisterAllMenuScenes;
