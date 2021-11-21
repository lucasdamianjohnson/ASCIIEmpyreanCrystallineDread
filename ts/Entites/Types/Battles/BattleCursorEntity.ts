import { timeStamp } from "console";
import type { DivineStar } from "../../../DivineStar";
import { probability } from "../../../Helper/Helper";
import { FearForm } from "../../../meta/FearmForms/FearForm.types";
import { SceneTypes } from "../../../meta/Scene/Scene.types";
import { direction } from "../../../meta/Util.types";
import { EntityInterface } from "../../Entity.interface";
declare const DS: DivineStar;

//Harmless passive creatures
export class BattleCursorEntity implements EntityInterface {
  drawText = "[";
  active = false;
  draw = true;
  width = 0;
  height = 0;

  barStyle: StyleObject = { dim: true, fg: "Cyan" };

  barTopLeft = "┏";
  barTopRight = "┓";
  barBottomRight = "┛";
  barBottomLeft = "┗";
  barMiddle = "┃";

  selectedEntityID: number = 0;

  currentRow = 0;
  currentCollumn = 0;

  constructor(
    public data: any,
    public id: string,
    public type: string,
    public x: number,
    public y: number,
    public sceneType: SceneTypes
  ) {
    if (!this.setCursorOn(0, 0)) {
      process.exit(0);
    }
    this._setUpControls();
    this._stylize();
  }

  setCursorOn(row: number, id: number) {
    const form =
      DS.battleManager.currentFearForms[DS.battleManager.formMap[row][id]];
    this.x = form.col - 2;
    this.y = form.row;
    this.width = form.data.boundingBox.width + 2;
    this.height = form.data.boundingBox.height + 2;
    this.selectedEntityID = form.id;
    return true;
  }

  _stylize() {
    this.barTopLeft = DS.dsCom.stylize(this.barTopLeft, this.barStyle);
    this.barTopRight = DS.dsCom.stylize(this.barTopRight, this.barStyle);
    this.barBottomRight = DS.dsCom.stylize(this.barBottomRight, this.barStyle);
    this.barBottomLeft = DS.dsCom.stylize(this.barBottomLeft, this.barStyle);
    this.barMiddle = DS.dsCom.stylize(this.barMiddle, this.barStyle);
  }

  _setUpControls() {
    const self = this;
    DS.menuSceneManager.addKeyControl("battle-cursor", "up", () => {
        if(!self.active)return;
      if (this.currentRow - 1 == -1) {
        this.currentRow = Object.keys(DS.battleManager.formMap).length - 1;
      } else if (
        DS.battleManager.formMap[self.currentRow - 1][self.currentCollumn]
      ) {
        this.currentRow--;
      }
      self.setCursorOn(self.currentRow, self.currentCollumn);
    });
    DS.menuSceneManager.addKeyControl("battle-cursor", "down", () => {
        if(!self.active)return;
      if (this.currentRow >= Object.keys(DS.battleManager.formMap).length - 1) {
        this.currentRow = 0;
      } else if (
        DS.battleManager.formMap[self.currentRow + 1][self.currentCollumn]
      ) {
        this.currentRow++;
      }
      self.setCursorOn(self.currentRow, self.currentCollumn);
    });
    DS.menuSceneManager.addKeyControl("battle-cursor", "left", () => {
        if(!self.active)return;
      if (this.currentCollumn - 1 == -1) {
        if (DS.battleManager.formMap[self.currentRow + 1]) {
          this.currentRow++;
          this.currentCollumn =
            DS.battleManager.formMap[self.currentRow].length;
        } else if (
          this.currentRow >=
          Object.keys(DS.battleManager.formMap).length - 1
        ) {
          this.currentRow = 0;
          this.currentCollumn =
            DS.battleManager.formMap[self.currentRow].length;
        }
      }
      if (this.currentCollumn == 1) {
        this.currentCollumn = 0;
      }

      if (DS.battleManager.formMap[self.currentRow][self.currentCollumn - 1]) {
        this.currentCollumn--;
      }
      self.setCursorOn(self.currentRow, self.currentCollumn);
    });
    DS.menuSceneManager.addKeyControl("battle-cursor", "right", () => {
        if(!self.active)return;
      if (
        this.currentCollumn ==
        DS.battleManager.formMap[self.currentRow].length - 1
      ) {
        if (DS.battleManager.formMap[self.currentRow + 1]) {
          this.currentRow++;
          this.currentCollumn =0;
        } else if (
          this.currentRow >=
          Object.keys(DS.battleManager.formMap).length - 1
        ) {
          this.currentRow = 0;
          this.currentCollumn = 0;
        }
      } else

      if (DS.battleManager.formMap[self.currentRow][self.currentCollumn + 1]) {
        this.currentCollumn++;
      }
      self.setCursorOn(self.currentRow, self.currentCollumn);
    });
    DS.menuSceneManager.addCharControl("battle-cursor", "z", () => {
        if(!self.active)return;
        DS.dsCom.showAt(this.selectedEntityID, { row: 5, col:80 });
    });
    DS.menuSceneManager.addCharControl("battle-cursor", "x", () => {
        if(!self.active)return;
    });
  }

  $draw() {
    if (!this.active || !this.draw) return;

    for (let i = this.y - 1; i < this.y - 1 + this.height; i++) {
      if (i == this.y - 1) {
        DS.dsCom.showAt(this.barTopLeft, { row: i, col: this.x });
        DS.dsCom.showAt(this.barTopRight, { row: i, col: this.x + this.width });
        continue;
      }
      if (i == this.y - 1 + this.height - 1) {
        DS.dsCom.showAt(this.barBottomLeft, { row: i, col: this.x });
        DS.dsCom.showAt(this.barBottomRight, {
          row: i,
          col: this.x + this.width,
        });
        continue;
      }

      DS.dsCom.showAt(this.barMiddle, { row: i, col: this.x });
      DS.dsCom.showAt(this.barMiddle, { row: i, col: this.x + this.width });
    }
  }

  $run() {}

  $destroy() {}
}
