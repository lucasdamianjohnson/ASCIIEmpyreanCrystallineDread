"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAllItems = void 0;
const RegisterArmorItems_1 = require("./Armor/RegisterArmorItems");
const RegisterOtherItems_1 = require("./Other/RegisterOtherItems");
const RegisterRingItems_1 = require("./Potion/RegisterRingItems");
const RegisterRingItems_2 = require("./Rings/RegisterRingItems");
const RegisterStoryItems_1 = require("./Story/RegisterStoryItems");
const RegisterWeaponItems_1 = require("./Weapons/RegisterWeaponItems");
async function RegisterAllItems() {
    RegisterArmorItems_1.RegisterArmorItems();
    RegisterRingItems_2.RegisterRingItems();
    RegisterWeaponItems_1.RegisterWeaponItems();
    RegisterRingItems_1.RegisterPotionItems();
    RegisterOtherItems_1.RegisterOtherItems();
    RegisterStoryItems_1.RegisterStoryItems();
}
exports.RegisterAllItems = RegisterAllItems;
