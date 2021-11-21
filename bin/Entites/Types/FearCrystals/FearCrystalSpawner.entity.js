"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FearCrystalSpawner = void 0;
const Helper_1 = require("../../../Helper/Helper");
class FearCrystalSpawner {
    constructor(data, id, type, x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.maxEntites = 2;
        this.currentEntites = 0;
        this.tickInterval = 5;
        this.tickCount = 0;
        this.active = true;
        this.draw = false;
        this.spawnProbabliltiy = 0.8;
    }
    _determineBattleSet() {
        const battleSet = {};
        for (const fearFormCats of Object.keys(this.data)) {
            const spawnMapSet = this.data[fearFormCats];
            for (const spawnMap of spawnMapSet) {
                if (Helper_1.probability(spawnMap.probability) || spawnMap.probability == 1) {
                    for (const fearForm of spawnMap.fearFormMap) {
                        if (Helper_1.probability(fearForm.probability) || fearForm.min >= 1) {
                            let num = 1;
                            if (fearForm.min != fearForm.max) {
                                num += (Math.random() * fearForm.max) >>> 0;
                            }
                            else {
                                num = fearForm.min;
                            }
                            battleSet[fearFormCats] ? true : battleSet[fearFormCats] = [];
                            battleSet[fearFormCats].push({
                                num: num,
                                id: fearForm.id,
                            });
                        }
                    }
                }
            }
        }
        return battleSet;
    }
    _spawn() {
        if (this.currentEntites >= this.maxEntites)
            return;
        const data = this._determineBattleSet();
        DS.entityManager.createNewEntity("level", data, "FearCrystalWanderEntity", "test", this.x, this.y);
        this.currentEntites++;
    }
    $run() {
        //don't spawn right on player
        if (!this.active || !(this.x - DS.player.x) || !(this.y - DS.player.y)) {
            return;
        }
        if (this.tickCount == 0) {
            if (Helper_1.probability(this.spawnProbabliltiy)) {
                this._spawn();
            }
            this.tickCount = this.tickInterval;
        }
        else {
            this.tickCount--;
        }
    }
    $draw() {
        if (!this.draw)
            return;
        //   DS.dsCom.showAt("testing", { row: this.y, col: this.x });
    }
    $destroy() {
    }
}
exports.FearCrystalSpawner = FearCrystalSpawner;
