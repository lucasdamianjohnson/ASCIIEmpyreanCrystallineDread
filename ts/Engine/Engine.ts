import { DivineStar } from "../DivineStar";
import {
  AnimationKey,
  LevelScene,
  SceneInterface,
  SceneTypes,
} from "../meta/Scene/Scene.types";
import type { direction } from "../meta/Util.types";

export class Engine {
  drawInterval: any;
  logicInterval: any;
  activeSceneTypes: SceneTypes = "level";
  hasAnimations = false;

  worldHeight = 0;
  worldWidth = 0;
  sceneTransitiong = false;
  currentCollisonMap: string[] = [];
  currentWorldData: string[] = [];
  screenWidth = 48;
  screenHeight = 17;
  currentWorldCollumn = 0;
  currentWorldRow = 0;

  borderDrawn = false;
  borderAnimatng = false;

  title: string;
  screenBorder: string;

  constructor(public dsCom: DSCommander, public DS: DivineStar) {
    const t1 = dsCom.stylize("⛯⛯⛯⛯⛯⛯⛯⛯⛯⛯", { fg: "Magenta", dim: true });
    const t2 = dsCom.stylize("⛯⛯⛯⛯⛯⛯⛯⛯⛯⛯⛯", { fg: "Magenta", dim: true });
    const title = dsCom.stylize("★ Empyrean Crystalline Dread ★", {
      bg: "Red",
      fg: "Black",
      dim: true,
    });
    this.title = t1 + title + t2;
    //▒
    const screenBorder = `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`;
    const SBS = dsCom.stylize(screenBorder, { fg: "Blue", dim: true });
    this.screenBorder = `${this.title}
${SBS}`;
  }

  readWorldDataSection(
    rowStart: number,
    rowEnd: number,
    colStart: number,
    colEnd: number
  ) {
    if (rowStart == rowEnd) {
      return [this.currentCollisonMap[rowStart].substring(colStart, colEnd)];
    }
    const returnString: string[] = [];
    while (rowStart < rowEnd) {
      if (this.currentCollisonMap[rowStart]) {
        if (this.currentCollisonMap[rowStart][colStart]) {
          returnString.push(this.currentCollisonMap[rowStart][colStart]);
        }
      }
      rowStart++;
    }

    return returnString;
  }

  async checkWorld(direction: direction, x: number, y: number) {
    if (direction == "left") {
      if (this.DS.levelManager.activeScene.leftScrene) {
        const leftScrene =
          this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[
            this.DS.levelManager.activeScene.leftScrene
          ];
        const rightScene = this.DS.levelManager.activeScene;
        await this.DS.screenTranistions.doScreenTransition(
          "level",
          rightScene,
          leftScrene,
          "left"
        );
        return true;
      }
    }
    if (direction == "right") {
      if (this.DS.levelManager.activeScene.rightScrene) {
        const rightScene =
          this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[
            this.DS.levelManager.activeScene.rightScrene
          ];
        const leftScrene = this.DS.levelManager.activeScene;
        await this.DS.screenTranistions.doScreenTransition(
          "level",
          leftScrene,
          rightScene,
          "right"
        );
        return true;
      }
    }

    if (direction == "up") {
      if (this.DS.levelManager.activeScene.topScrene) {
        const topScene =
          this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[
            this.DS.levelManager.activeScene.topScrene
          ];
        const bottomScene = this.DS.levelManager.activeScene;
        await this.DS.screenTranistions.doScreenTransition(
          "level",
          bottomScene,
          topScene,
          "up"
        );
        return true;
      }
    }

    if (direction == "down") {
      if (this.DS.levelManager.activeScene.bottomScrene) {
        const bottomScene =
          this.DS.levelManager.scenes[this.DS.levelManager.activeMeta.id].scene[
            this.DS.levelManager.activeScene.bottomScrene
          ];
        const topScene = this.DS.levelManager.activeScene;
        await this.DS.screenTranistions.doScreenTransition(
          "level",
          topScene,
          bottomScene,
          "down"
        );
        return true;
      }
    }
    return false;
  }

  getRelativePosition(x: number, y: number) {
    return {
      x: x - this.currentWorldCollumn,
      y: y - this.currentWorldRow,
    };
  }

  setWorldScene(type: SceneTypes, data: SceneInterface) {
    if (data.rawText["1"].styleMap != "-1") {
      this._activeStyleObject = data.styleMap[data.rawText["1"].styleMap];
    } else {
      this._activeStyleObject = {};
    }
    this.DS.dsCom.defineMessageStyle("Raw", this._activeStyleObject);

    if (data.entityLocations) {
      for (const entity of data.entityLocations[data.activeEntityMap]) {
        this.DS.entityManager.createNewEntity(
          type,
          entity.data.data ? entity.data.data : {},
          entity.data.entityName,
          entity.data.type,
          entity.x,
          entity.y
        );
      }
    }

    this.currentWorldData = data.screenStates["1"];
    if (type == "level") {
      this.currentCollisonMap = (data as LevelScene).collisionMaps["1"];
    }
    this.worldHeight = 20;
    this.worldWidth = 50;

    if (
      (Object.keys(data.animations).length == 0 &&
        data.screenStateAnimationKeys[data.activeAnimationScreenState] == undefined)||
      data.activeAnimationScreenState == ""
    ) {
      this.hasAnimations = false;
    } else {
      this.hasAnimations = true;
    }
  }

  setWorldData(data: string[]) {
    this.currentWorldData = data;
    this.worldHeight = 18;
    this.worldWidth = 50;
  }

  async runGameLoop() {
    this.drawInterval = setInterval(async () => {
      this._drawLoop();
    }, DRAWINTERVAL);
    this.logicInterval = setInterval(async () => {
      this._logicLoop();
    }, LOGICINTERVAL);
  }

  _activeStyleObject: StyleObject = {};

  async _logicLoop() {
    this.DS.entityManager.$run();
    this._updateMenus();
  }

  async _drawLoop() {
    //  this.dsCom.setRow(0);
    this.dsCom.setRow(0);
    this._drawMenus();
    this.dsCom.setRow(0);
    this.dsCom.showAt(this.screenBorder, { row: 0 });

    let k = 2;
    for (
      let i = this.currentWorldRow;
      i < this.currentWorldRow + this.screenHeight;
      i++
    ) {
      if (!this.currentWorldData[i]) continue;
      this.dsCom.RAW.showAt(
        this.currentWorldData[i].substring(
          this.currentWorldCollumn,
          this.currentWorldCollumn + this.screenWidth
        ),
        { row: k, col: 1 }
      ).CLEAR;
      k++;
    }
    if (this.activeSceneTypes == "battle") {
      this.DS.battleDrawer.$draw();
    }

    try {
      this._doWorldAnimations();
      this._doSceneAnimations();
    } catch (error: any) {
      console.log(error);
      process.exit(0);
    }

    this.DS.player.$draw();
    this.DS.entityManager.$draw();

    this.dsCom.setRow(0);
  }
  async _updateMenus() {
    this.DS.menuSceneManager.$run();
  }

  async _drawMenus() {
    this.DS.menuSceneManager.$draw();
  }

  async _doWorldAnimations() {
    if (this.activeSceneTypes == "battle") {
      this.DS.battleSceneManager.$doSceneWorldAnimations();
    }
    if (this.activeSceneTypes == "level") {
      this.DS.levelManager.$doSceneWorldAnimations();
    }
    this.DS.menuSceneManager.$doSceneWorldAnimations();
  }

  async _doSceneAnimations() {
    if (this.activeSceneTypes == "battle") {
      this.DS.battleSceneManager.$doSceneAnimations();
    }
    if (this.activeSceneTypes == "level") {
      this.DS.levelManager.$doSceneAnimations();
    }
    this.DS.menuSceneManager.$doSceneAnimations();
  }
}
