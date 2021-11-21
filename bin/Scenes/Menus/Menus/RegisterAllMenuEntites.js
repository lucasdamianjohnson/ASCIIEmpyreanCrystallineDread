"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAllMenuEntities = void 0;
const RightBattleMenu_1 = require("./RightBattleMenu");
function RegisterAllMenuEntities() {
    DS.entityManager.registerEntity("RightBattleMenu", RightBattleMenu_1.RightBattleMenu);
}
exports.RegisterAllMenuEntities = RegisterAllMenuEntities;
