"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioManager = void 0;
const AudioCom_1 = require("./AudioCom");
class AudioManager {
    constructor(DS) {
        this.DS = DS;
        this.audioCom = new AudioCom_1.AudioCom();
    }
    async playSong(songId, loop = false) {
        await this.audioCom.requestPlay("song", songId, loop);
    }
    async playSFX(sfxId, loop = false) {
        await this.audioCom.requestPlay("sfx", sfxId, loop);
    }
}
exports.AudioManager = AudioManager;
