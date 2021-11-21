import type { DivineStar } from "../../../DivineStar";
import { SceneTypes } from "../../../meta/Scene/Scene.types";
import { EntityInterface } from "../../Entity.interface";
declare const DS: DivineStar;

//Harmless passive creatures
export class MelStatsEntity implements EntityInterface {
  nameStyle: StyleObject = {
    dim: true,
    fg: "Magenta",
  };

  name = "Melchizedek";
  levelLabel = "Level:";
  healthLabel = "Health:";
  manaLabel = "Mana:";
  attackLabel = "ATK:";
  deffneseLabel = "DEF:";
  speedLabel = "SPD:";
  intellegenceLabel = "INT:";
  wisdomLabel = "WSD:";
  luckLabel = "LCK:";
  draw = true;

  drawn = false;

  constructor(
    public data: any,
    public id: string,
    public type: string,
    public x: number,
    public y: number,
    public sceneType: SceneTypes
  ) {
    this._stylize();
    if (sceneType == "bottom-menu" || sceneType == "bottom-right-menu") {
      this.y = this.y + SCREENHEIGHT + 1;
    }
    if (sceneType == "right-menu" || sceneType == "bottom-right-menu") {
      this.x = this.x + SCREENWIDTH + 1;
    }

    DS.dsCom.defineMessageStyle("Good", { dim: true, fg: "Magenta" });
  }

  _stylize() {
    this.name = DS.dsCom.stylize(this.name, this.nameStyle);
  }

  _getHealth() {
    const health = DS.playerData.getData().currentHealth;
    const maxHealth = DS.playerData.getData().maxHealth;
    return `${health}/${maxHealth}`;
  }
  _getMana() {
    const mana = DS.playerData.getData().currentMana;
    const maxMana = DS.playerData.getData().maxMana;
    return `${mana}/${maxMana}`;
  }
  _getLevel() {
    const level = DS.playerData.getData().level;
    return level;
  }
  _getAttack() {
    const attack = DS.playerData.getData().attack;
    return attack;
  }
  _getDeffense() {
    const deffense = DS.playerData.getData().deffense;
    return deffense;
  }
  _getSpeed() {
    const speed = DS.playerData.getData().speed;
    return speed;
  }
  _getIntellegence() {
    const speed = DS.playerData.getData().speed;
    return speed;
  }
  _getWisdom() {
    const speed = DS.playerData.getData().speed;
    return speed;
  }
  _getLuck() {
    const speed = DS.playerData.getData().speed;
    return speed;
  }

  $draw() {
    if (!this.draw) return;
    let xOffset = 0;
    let dataStart = 7;
    let statStart1 = 3;
    let statStart2 = 8;


    DS.dsCom.DIM.UNDERLINE.MAGENTA.showAt("Melchizedek", {
      row: this.y,
      col: this.x + 2,
    })
      .CLEAR.DIM.MAGENTA.showAt(this.levelLabel, {
        row: this.y + 1,
        col: this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getLevel(), {
        row: this.y + 1,
        col: dataStart + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.healthLabel, {
        row: this.y + 2,
        col: this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getHealth(), {
        row: this.y + 2,
        col: dataStart + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.manaLabel, {
        row: this.y + 3,
        col: this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getMana(), {
        row: this.y + 3,
        col: dataStart + this.x + xOffset + 1,
      })
      .CLEAR//show Stats

      .DIM.MAGENTA.showAt(this.attackLabel, {
        row: this.y + 4,
        col: this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getAttack(), {
        row: this.y + 4,
        col: statStart1 + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.deffneseLabel, {
        row: this.y + 5,
        col: this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getDeffense(), {
        row: this.y + 5,
        col: statStart1 + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.speedLabel, {
        row: this.y + 6,
        col: this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getSpeed(), {
        row: this.y + 6,
        col: statStart1 + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.intellegenceLabel, {
        row: this.y + 4,
        col: statStart2 + this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getIntellegence(), {
        row: this.y + 4,
        col: statStart2 + statStart1 + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.wisdomLabel, {
        row: this.y + 5,
        col: statStart2 + this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getWisdom(), {
        row: this.y + 5,
        col: statStart2 + statStart1 + this.x + xOffset + 1,
      })
      .CLEAR.DIM.MAGENTA.showAt(this.luckLabel, {
        row: this.y + 6,
        col: statStart2 + this.x + xOffset,
      })
      .CLEAR.BR.CYAN.showAt(this._getLuck(), {
        row: this.y + 6,
        col: statStart2 + statStart1 + this.x + xOffset + 1,
      }).CLEAR;

      this.drawn = true;
  }

  $run() {}

  $destroy() {}
}
