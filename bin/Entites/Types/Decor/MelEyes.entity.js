"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MelEyesEntity = void 0;
class MelEyesEntity {
    constructor(data, id, type, x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.tickInterval = 1;
        this.tickCount = 0;
        this.collumn = 0;
        this.currentEye = 0;
        this.eyeNum = 5;
        this.draw = true;
        this.eyeOne = "";
        this.eyeTwo = "";
        if (type == "bottom-bar" || type == "bottom-right-bar") {
            this.eyeOne = DS.dsCom.DIM.cyan("0");
            this.eyeTwo = DS.dsCom.BRIGHT.cyan("0");
            this.y = this.y += SCREENHEIGHT + 1;
            if (type == "bottom-right-bar") {
                this.collumn = SCREENWIDTH + 3;
            }
        }
        else {
            this.collumn = SCREENWIDTH + 3;
            this.eyeOne = DS.dsCom.DIM.cyan("00");
            this.eyeTwo = DS.dsCom.BRIGHT.cyan("00");
        }
    }
    $draw() {
        for (let i = 0; i < this.eyeNum; i++) {
            let show = this.eyeOne;
            if (i == this.currentEye) {
                show = this.eyeTwo;
            }
            DS.dsCom.showAt(show, { row: this.y + i, col: this.collumn + this.x });
        }
    }
    _runTick() {
        if (this.currentEye > this.eyeNum - 1) {
            this.currentEye = 0;
        }
        else {
            this.currentEye++;
        }
    }
    $run() {
        if (this.tickCount == 0) {
            this._runTick();
            this.tickCount = this.tickInterval;
        }
        else {
            this.tickCount--;
        }
    }
    $destroy() {
    }
}
exports.MelEyesEntity = MelEyesEntity;
