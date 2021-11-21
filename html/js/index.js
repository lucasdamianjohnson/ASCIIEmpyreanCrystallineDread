import { AudioManager } from "./AudioManager";
const init = async () => {
    const audioManager = new AudioManager();
    const audioData = await getData("/data/audio/audio-data.json");
    window.audioManager = audioManager;
    for (const songs of Object.keys(audioData.music)) {
        const song = audioData.music[songs];
        audioManager.registerNewSong(songs, song.path);
    }
    for (const sfx of Object.keys(audioData.sfx)) {
        const song = audioData.sfx[sfx];
        audioManager.registerNewSFX(sfx, song.path);
    }
    const listener = async () => {
        if (audioManager.audioConnected)
            return;
        await audioManager.connectAllAudio(listener);
        audioManager.$initDataWatch();
        setTimeout(async () => {
            await fetch(`/start`);
        }, 2000);
    };
    window.addEventListener("click", listener);
};
async function getData(path) {
    const dataRaw = await fetch(path);
    return JSON.parse(await dataRaw.json());
}
window.addEventListener("load", () => {
    init();
});
/*  const audioContext = new AC();
// get the audio element
const audioElement = document.createElement("audio",);
audioElement.src = "./assets/music/overworld.mp3"
let track : any= undefined;
  // pass it into the audio context
  if (track == undefined) {
    track = await audioContext.createMediaElementSource(audioElement);
    await track.connect(audioContext.destination);
    audioElement.loop = true;
    await audioElement.play();
  } */
/*          setInterval(async()=>{

            const response = await fetch("/data");
            console.log(await response.text());

        },10);  */
