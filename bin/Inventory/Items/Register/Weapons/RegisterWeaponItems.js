"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterWeaponItems = void 0;
function RegisterWeaponItems() {
    DS.itemManager.registerNewWeapon({
        id: "1",
        name: "Weapon 1",
        description: "Test Weapon",
        levelRequirment: 1,
        attack: 1,
    });
}
exports.RegisterWeaponItems = RegisterWeaponItems;
