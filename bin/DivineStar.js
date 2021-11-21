"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivineStar = void 0;
const ScreenTransitions_1 = require("./Animations/ScreenTransitions");
const EntityManager_1 = require("./Entites/EntityManager");
const LevelManager_1 = require("./Scenes/Levels/LevelManager");
const Player_1 = require("./Player/Player");
const BattleSceneManager_1 = require("./Scenes/BattleScenes/BattleSceneManager");
const Engine_1 = require("./Engine/Engine");
const SceneProcessor_1 = require("./Scenes/SceneProcessor");
const BattleManager_1 = require("./Battles/BattleManager");
const FearFormManager_1 = require("./Forms/FearFormManager");
const BattleDrawer_1 = require("./Battles/BattleDrawer");
const AnimationHelper_1 = require("./Animations/AnimationHelper");
const AudioManager_1 = require("./Audio/AudioManager");
const MenuSceneManager_1 = require("./Scenes/Menus/MenuSceneManager");
const ControlManager_1 = require("./Controls/ControlManager");
const InventoryManager_1 = require("./Inventory/InventoryManager");
const ItemManager_1 = require("./Inventory/Items/ItemManager");
const PlayerData_1 = require("./Data/PlayerData/PlayerData");
const WolrdData_1 = require("./Data/WorldData/WolrdData");
class DivineStar {
    constructor(dsCom) {
        this.dsCom = dsCom;
        this.battleDrawer = new BattleDrawer_1.BattleDrawer(this);
        this.battleManager = new BattleManager_1.BattleManager(this);
        this.sceneProcessor = new SceneProcessor_1.SceneProcessor(this);
        this.fearFormManager = new FearFormManager_1.FearFormManager(this);
        this.playerData = new PlayerData_1.PlayerData(this);
        this.levelManager = new LevelManager_1.LevelManager(this);
        this.battleSceneManager = new BattleSceneManager_1.BattleSceneManager(this);
        this.audioManager = new AudioManager_1.AudioManager(this);
        this.controlManager = new ControlManager_1.ControlManager(this);
        this.screenTranistions = new ScreenTransitions_1.ScreenTransitions(this);
        this.animationHelper = new AnimationHelper_1.AnimationHelper(this);
        this.inventoryManager = new InventoryManager_1.InventoryManager(this);
        this.itemManager = new ItemManager_1.ItemManager(this);
        this.worldData = new WolrdData_1.WorldData(this);
        this.title = "";
        this.screenBorder = ``;
        this.engine = new Engine_1.Engine(dsCom, this);
        this.player = new Player_1.Player(dsCom, this);
        this.menuSceneManager = new MenuSceneManager_1.MenuSceneManager(this);
        this.entityManager = new EntityManager_1.EntityManager(dsCom, this);
    }
    gameInit() {
        this.levelManager.setActiveSceneMeta("overworld");
        this.levelManager.setActiveScene("overworld", "1");
        this.menuSceneManager.bottomMenuDrawer.setActiveMenuScene("bottom-menu", "1");
        this.menuSceneManager.bottomRightMenuDrawer.setActiveMenuScene("bottom-right-menu", "1");
        this.engine.runGameLoop();
        if (SOUNDENABLED) {
            this.audioManager.playSong("overworld", true);
        }
    }
}
exports.DivineStar = DivineStar;
