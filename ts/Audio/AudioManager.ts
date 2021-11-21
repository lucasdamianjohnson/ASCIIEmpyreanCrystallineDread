import type { DivineStar } from "../DivineStar";
import { AudioCom } from "./AudioCom";

export class AudioManager {
  audioCom: AudioCom = new AudioCom();

  constructor(public DS: DivineStar) {}

 async playSong(songId: string,loop : boolean = false) {
    await this.audioCom.requestPlay("song", songId,loop);
  }

 async playSFX(sfxId: string,loop : boolean = false) {
    await this.audioCom.requestPlay("sfx", sfxId,loop);
  }
}
