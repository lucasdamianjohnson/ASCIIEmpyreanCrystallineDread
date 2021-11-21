"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs").promises;
global.fs = fs;
const dsCom = require("dscom");
require("./Init/SetUpConstants");
const DivineStar_1 = require("./DivineStar");
const RegisterAllEntites_1 = require("./Entites/RegisterAllEntites");
const ImportAllLevel_1 = require("./Scenes/Levels/Register/ImportAllLevel");
const RegisterAllBattleScenes_1 = require("./Scenes/BattleScenes/Register/RegisterAllBattleScenes");
const RegisterAllMenuScenes_1 = require("./Scenes/Menus/Scenes/RegisterAllMenuScenes");
const RegisterAllFearForms_1 = require("./Forms/Register/RegisterAllFearForms");
const RegisterAllMenuEntites_1 = require("./Scenes/Menus/Menus/RegisterAllMenuEntites");
const RegisterAllItems_1 = require("./Inventory/Items/Register/RegisterAllItems");
const DS = new DivineStar_1.DivineStar(dsCom);
global.DS = DS;
(async () => {
    dsCom.$ENABLESHOW.NEWSCREEN;
    //Get Program Input Params
    dsCom.addParam({
        flag: "a",
        name: "audio",
        desc: "Start game with sound. Open http://localhost:8080 to hear the sound.",
        type: "boolean",
    });
    (await dsCom.initProgramInput()).ifParamIsset("audio", (value, args) => {
        if (value) {
            SOUNDENABLED = true;
        }
    }, {});
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
        ImportAllLevel_1.ImportAllLevels(),
        RegisterAllItems_1.RegisterAllItems(),
        RegisterAllFearForms_1.RegisterAllFearForms(),
        RegisterAllEntites_1.RegisterAllEntites(),
        RegisterAllBattleScenes_1.RegisterAllBattleScenes(),
        RegisterAllMenuScenes_1.RegisterAllMenuScenes(),
        RegisterAllMenuEntites_1.RegisterAllMenuEntities()
    ]);
    await DS.gameInit();
    DS.controlManager.addToCharHook("m", async () => {
        if (!DS.menuSceneManager.rightMenuDrawer.active && !DS.menuSceneManager.rightMenuDrawer.animating) {
            await DS.menuSceneManager.rightMenuDrawer.popOut();
        }
        else if (!DS.menuSceneManager.rightMenuDrawer.animating) {
            await DS.menuSceneManager.rightMenuDrawer.popIn();
        }
    }, this);
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
