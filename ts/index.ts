const fs = require("fs").promises;
(global as any).fs = fs;
const dsCom: DSCommander = require("dscom");
import "./Init/SetUpConstants";
import { DivineStar } from "./DivineStar";
import { RegisterAllEntites } from "./Entites/RegisterAllEntites";
import { ImportAllLevels as RegisterAllLevels } from "./Scenes/Levels/Register/ImportAllLevel";
import { RegisterAllBattleScenes } from "./Scenes/BattleScenes/Register/RegisterAllBattleScenes";
import { RegisterAllMenuScenes } from "./Scenes/Menus/Scenes/RegisterAllMenuScenes";
import { RegisterAllFearForms } from "./Forms/Register/RegisterAllFearForms";
import { RegisterAllMenuEntities } from "./Scenes/Menus/Menus/RegisterAllMenuEntites";
import { RegisterAllItems } from "./Inventory/Items/Register/RegisterAllItems";
const DS = new DivineStar(dsCom);
(global as any).DS = DS;



(async () => {
  dsCom.$ENABLESHOW.NEWSCREEN;
  //Get Program Input Params

  dsCom.addParam({
    flag: "a",
    name: "audio",
    desc: "Start game with sound. Open http://localhost:8080 to hear the sound.",
    type: "boolean",
  });
  (await dsCom.initProgramInput()).ifParamIsset(
    "audio",
    (value: ProgramParamsDataTypes, args: any) => {
      if (value) {
        SOUNDENABLED = true;
      }
    },
    {}
  );

  if (SOUNDENABLED) {
    dsCom.BR.CYAN.logSleep([
      "Sound is enabled.",
      "Please open a web browser and connect to http://localhost:8080 then click the window to begin hearing sound.",
      "Awaiting Connection...",
    ]);
    await DS.audioManager.audioCom.$init();
    await DS.audioManager.audioCom.$awaitConnection();
    dsCom.logSleep(["Connenction Dected.", "Starting Game...."]).NS.CLEAR;
  }

  Promise.all([
    RegisterAllLevels(),
    RegisterAllItems(),
    RegisterAllFearForms(),
    RegisterAllEntites(),
    RegisterAllBattleScenes(),
    RegisterAllMenuScenes(),
    RegisterAllMenuEntities()
  ]);

await  DS.gameInit();



DS.controlManager.addToCharHook("m",async()=>{
  if(!DS.menuSceneManager.rightMenuDrawer.active && !DS.menuSceneManager.rightMenuDrawer.animating){
   await DS.menuSceneManager.rightMenuDrawer.popOut();
  }else if(!DS.menuSceneManager.rightMenuDrawer.animating)  {
    await DS.menuSceneManager.rightMenuDrawer.popIn(); 
  }
},this); 
 

  




  //  DS.battleManager.enterBattle();
})();

/**
   setTimeout(() => {
    DS.player.playerGetCrystal("red");
  }, 5000);
  setTimeout(() => {
    DS.player.playerGetCrystal("green");
  }, 6000);
  setTimeout(() => {
    DS.player.playerGetCrystal("blue");
  }, 7000);
  setTimeout(() => {
    DS.player.playerGetCrystal("cyan");
  }, 8000);
  setTimeout(() => {
    DS.player.playerGetCrystal("magenta");
  }, 9000);
  setTimeout(() => {
    DS.player.playerGetCrystal("yellow");
  }, 10000);
 */
