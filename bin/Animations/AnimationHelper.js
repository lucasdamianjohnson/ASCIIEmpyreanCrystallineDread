"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationHelper = void 0;
class AnimationHelper {
    constructor(DS) {
        this.DS = DS;
    }
    preprocessStyleKeyFrames(keyFrameMap) {
        for (const animCat of Object.keys(keyFrameMap)) {
            for (const animKey of keyFrameMap[animCat]) {
                animKey.animText = this.DS.dsCom.stylize(animKey.animText, animKey.style);
            }
        }
        return keyFrameMap;
    }
}
exports.AnimationHelper = AnimationHelper;
