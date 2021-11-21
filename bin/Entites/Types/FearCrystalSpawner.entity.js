"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FearCrystalSpawner = void 0;
const Helper_1 = require("../../Helper/Helper");
class FearCrystalSpawner {
    constructor(data, id, type, x, y) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.maxEntites = 2;
        this.currentEntites = 0;
        this.tickInterval = 20;
        this.tickCount = 0;
        this.active = true;
        this.draw = true;
        this.spawnProbabliltiy = .8;
    }
    _spawn() {
        if (this.currentEntites >= this.maxEntites)
            return;
        DS.entityManager.createNewEntity({}, "FearCrystalWanderEntity", "test", this.x, this.y);
        this.currentEntites++;
    }
    $run() {
        if (!this.active)
            return;
        const xDif = this.x - DS.player.x;
        const yDif = this.y - DS.player.y;
        //don't spawn right on player 
        if (!xDif || !yDif) {
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
        DS.dsCom.showAt("testing", { row: this.y, col: this.x });
    }
}
exports.FearCrystalSpawner = FearCrystalSpawner;
