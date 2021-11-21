"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterWeaponItem = void 0;
function RegisterWeaponItem() {
    DS.itemManager.registerNewWeapon({
        id: "1",
        name: "Weapon 1",
        description: "Test Weapon",
        levelRequirment: 1,
        attack: 1,
    });
}
exports.RegisterWeaponItem = RegisterWeaponItem;
