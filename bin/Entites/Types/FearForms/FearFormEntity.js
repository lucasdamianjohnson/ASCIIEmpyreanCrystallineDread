"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FearFormEntity = void 0;
//Harmless passive creatures 
class FearFormEntity {
    constructor(data, id, type, x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.drawText = "";
        this.active = true;
        this.draw = true;
        this.drawText = data.animations[data.activeAnimation][0].animText;
        DS.animationHelper.preprocessStyleKeyFrames(data.animations);
    }
    $draw() {
        if (!this.active || !this.draw)
            return;
        DS.dsCom.showAt(this.drawText, { row: this.y, col: this.x });
    }
    $run() {
    }
    $destroy() {
    }
}
exports.FearFormEntity = FearFormEntity;
