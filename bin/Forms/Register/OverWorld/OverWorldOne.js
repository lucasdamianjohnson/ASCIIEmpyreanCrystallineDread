"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterOverWorldFearForms = void 0;
async function RegisterOverWorldFearForms() {
    DS.fearFormManager.registerNewFearFormCategory("over-world-1")
        .registerNewFearForm("over-world-1", "creature-1", {
        id: "creature-1",
        name: "Creature",
        loot: [],
        level: 1,
        totalHealth: 20,
        totalMana: 20,
        deffense: 0,
        agaility: 0,
        speed: 0,
        intellegence: 0,
        wisdom: 0,
        spellCaster: false,
        spells: [],
        weakness: [],
        activeAnimation: "1",
        animations: {
            "1": [
                {
                    animText: "[0]",
                    interval: 10,
                    style: {},
                }
            ]
        },
    });
}
exports.RegisterOverWorldFearForms = RegisterOverWorldFearForms;
