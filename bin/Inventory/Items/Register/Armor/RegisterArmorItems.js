"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterArmorItems = void 0;
function RegisterArmorItems() {
    DS.itemManager.registerNewArmor({
        id: "1",
        name: "Armor 1",
        description: "Test Armor",
        levelRequirment: 1,
        deffense: 1,
    });
}
exports.RegisterArmorItems = RegisterArmorItems;
