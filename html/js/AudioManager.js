export class AudioManager {
    constructor() {
        this.audioConnected = false;
        this.songPath = "/assets/music/";
        this.sfxPath = "/assets/sfx/";
        this.activeSongElement = undefined;
        this.songElements = {};
        this.songTracks = {};
        this.sfxElements = {};
        this.sfxTracks = {};
        this.songDiv = document.createElement("div");
        this.sfxgDiv = document.createElement("div");
        this.completed = {};
        this.currentRequest = 0;
        document.body.appendChild(this.songDiv);
        document.body.appendChild(this.sfxgDiv);
        const AC = window.AudioContext;
        this.audioContext = new AC();
    }
    async $initDataWatch() {
        setInterval(async () => {
            const response = await fetch("/data/update");
            const requestMap = await response.json();
            this.currentRequest = Object.keys(requestMap).length;
            for (const id of Object.keys(requestMap)) {
                if (this.completed[id])
                    continue;
                const request = requestMap[id];
                this.completed[id] = true;
                if (request.type == "song") {
                    if (this.songElements[request.id].paused) {
                        this.songElements[request.id].play();
                    }
                    if (request.loop) {
                        this.songElements[request.id].loop = true;
                    }
                    if (this.activeSongElement) {
                        this.activeSongElement.pause();
                        this.activeSongElement.currentTime = 0;
                        this.activeSongElement = this.songElements[request.id];
                    }
                    else {
                        this.activeSongElement = this.songElements[request.id];
                    }
                }
                if (request.type == "sfx") {
                    this.sfxElements[request.id].currentTime = 0;
                    this.sfxElements[request.id].play();
                    if (request.loop) {
                        this.sfxElements[request.id].loop = true;
                    }
                }
            }
        }, 10);
        setInterval(async () => {
            const cutoff = Object.keys(this.completed).length - 5;
            let count = 0;
            for (const id of Object.keys(this.completed)) {
                if (count >= cutoff) {
                    break;
                }
                //@ts-ignore
                this.completed[id] = undefined;
                delete this.completed[id];
                count++;
            }
        }, 20000);
    }
    async connectAllAudio(listener) {
        if (this.audioConnected)
            return;
        for (const songs of Object.keys(this.songElements)) {
            const elm = this.songElements[songs];
            const track = await this.audioContext.createMediaElementSource(elm);
            await track.connect(this.audioContext.destination);
        }
        for (const sfx of Object.keys(this.sfxElements)) {
            const elm = this.sfxElements[sfx];
            const track = await this.audioContext.createMediaElementSource(elm);
            await track.connect(this.audioContext.destination);
        }
        //     window.removeEventListener("click",listener);
        this.audioConnected = true;
    }
    playSong(id) {
        this.songElements[id].play();
    }
    playSFX(id) {
        this.sfxElements[id].currentTime = 0;
        this.sfxElements[id].play();
    }
    registerNewSong(id, path) {
        this.songElements[id] = document.createElement("audio");
        this.songElements[id].id = id;
        this.songElements[id].src = `${this.songPath}${path}`;
        this.songDiv.appendChild(this.songElements[id]);
    }
    async registerNewSFX(id, path) {
        this.sfxElements[id] = document.createElement("audio");
        this.sfxElements[id].id = id;
        this.sfxElements[id].src = `${this.sfxPath}${path}`;
        this.sfxgDiv.appendChild(this.sfxElements[id]);
    }
}
