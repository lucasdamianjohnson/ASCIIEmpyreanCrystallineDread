"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
/**# Player Data
 * ---
 * Handles the reading and writing of the player's data.
 *
 */
class PlayerData {
    constructor(DS) {
        this.DS = DS;
        this.currentEquirpedItems = {
            armor: [],
            ring: [],
            weapon: []
        };
        this.currentData = {
            currentHealth: 50,
            maxHealth: 50,
            maxMana: 30,
            currentMana: 30,
            level: 1,
            totalMana: 30,
            attack: 3,
            deffense: 1,
            speed: 3,
            intellegence: 5,
            wisdom: 4,
            luck: 1,
            currentInventory: {
                potion: [],
                ring: [],
                weapon: [],
                armor: [],
                other: [],
                story: []
            }
        };
    }
    getData() {
        return this.currentData;
    }
    equipItem(slot, itemId) {
        this.currentEquirpedItems[slot].push(itemId);
    }
    unEquipItem(slot, itemId) {
        const index = this.currentEquirpedItems[slot].indexOf(itemId);
        if (index == -1)
            return;
        this.currentEquirpedItems[slot].slice(index, 1);
    }
    getEquipedItem(slot) {
        return this.currentEquirpedItems[slot];
    }
    addItem(itemType, itemData, amount = 1) {
        let itemFound = false;
        for (const items of this.currentData.currentInventory[itemType]) {
            if (items.id == itemData.id) {
                items.amount += amount;
                itemFound = true;
                break;
            }
        }
        if (!itemFound) {
            this.currentData.currentInventory[itemType].push({
                id: itemData.id,
                amount: amount
            });
        }
    }
}
exports.PlayerData = PlayerData;
