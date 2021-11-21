"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPotionItems = void 0;
function RegisterPotionItems() {
    DS.itemManager.registerNewPotion({
        id: "1",
        name: "Ring 1",
        description: "Ring Armor",
        levelRequirment: 1,
        onUse: () => { }
    });
}
exports.RegisterPotionItems = RegisterPotionItems;
