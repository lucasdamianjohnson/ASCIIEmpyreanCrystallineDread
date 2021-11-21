"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
/**# Player Data
 * ---
 * Handles the reading and writing of the player's data.
 *
 */
class PlayerData {
    constructor() {
        this.currentData = {
            currentHealth: 50,
            maxHealth: 50,
            maxMana: 30,
            currentMana: 30,
            level: 1,
            totalMana: 30,
            deffense: 1,
            agaility: 5,
            speed: 3,
            intellegence: 5,
            wisdom: 4,
        };
    }
    getData() {
        return this.currentData;
    }
}
exports.PlayerData = PlayerData;
