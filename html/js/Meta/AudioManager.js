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
        document.body.appendChild(this.songDiv);
        document.body.appendChild(this.sfxgDiv);
        const AC = window.AudioContext;
        this.audioContext = new AC();
    }
    $initDataWatch() {
        setInterval(async () => {
            const response = await fetch("/data/update");
            const requestMap = await response.json();
            console.log(requestMap);
            for (const id of Object.keys(requestMap)) {
                const request = requestMap[id];
                if (request.type == "song") {
                    this.songElements[request.id].play();
                    if (request.loop) {
                        this.songElements[request.id].loop = true;
                    }
                    if (this.activeSongElement) {
                        this.activeSongElement.pause();
                        this.activeSongElement = this.songElements[request.id];
                    }
                }
                if (request.type == "sfx") {
                    this.sfxElements[request.id].play();
                    if (request.loop) {
                        this.sfxElements[request.id].loop = true;
                    }
                }
                console.log(request);
                fetch(`/data/complete=${id}`);
            }
        }, 10);
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
            const elm = this.songElements[sfx];
            const track = await this.audioContext.createMediaElementSource(elm);
            await track.connect(this.audioContext.destination);
        }
        window.removeEventListener("click", listener);
        this.audioConnected = true;
    }
    playSong(id) {
        this.songElements[id].play();
    }
    playSFX(id) {
        this.sfxElements[id].play();
    }
    registerNewSong(id, path) {
        this.songElements[id] = document.createElement("audio");
        this.songElements[id].id = id;
        this.songElements[id].src = `${this.songPath}${path}`;
        this.songDiv.appendChild(this.songElements[id]);
    }
    registerNewSFX(id, path) {
        this.sfxElements[id] = document.createElement("audio");
        this.sfxElements[id].id = id;
        this.sfxElements[id].src = `${this.sfxPath}${path}`;
        this.sfxgDiv.appendChild(this.songElements[id]);
    }
}
