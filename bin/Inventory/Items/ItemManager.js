"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemManager = void 0;
class ItemManager {
    constructor(DS) {
        this.DS = DS;
        this.items = {
            potion: {},
            ring: {},
            weapon: {},
            armor: {},
            other: {},
            story: {},
        };
    }
    registerNewWeapon(data) {
        this.items.weapon[data.id] = data;
    }
    registerNewPotion(data) {
        this.items.potion[data.id] = data;
    }
    registerNewRing(data) {
        this.items.ring[data.id] = data;
    }
    registerNewArmor(data) {
        this.items.armor[data.id] = data;
    }
    registerNewStoryItem(data) {
        this.items.story[data.id] = data;
    }
    registerNewOtherItem(data) {
        this.items.other[data.id] = data;
    }
}
exports.ItemManager = ItemManager;
