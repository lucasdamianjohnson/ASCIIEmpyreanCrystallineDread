import type { DivineStar } from "../../../DivineStar";
import { SceneTypes } from "../../../meta/Scene/Scene.types";
import { EntityInterface } from "../../Entity.interface";
declare const DS: DivineStar;

//Harmless passive creatures
export class WorldDataDisplayEntity implements EntityInterface {
  nameStyle: StyleObject = {
    dim: true,
    fg: "Magenta",
  };

  label = "World";
  dimensionLabel = "Current Dimension:";
  locationLabel = "Current Location:";

  draw = true;

  constructor(
    public data: any,
    public id: string,
    public type: string,
    public x: number,
    public y: number,
    public sceneType: SceneTypes
  ) {

    if (sceneType == "bottom-menu" || sceneType == "bottom-right-menu") {
      this.y = this.y + SCREENHEIGHT + 1;
    }
    if (sceneType == "right-menu" || sceneType == "bottom-right-menu") {
      this.x = this.x + SCREENWIDTH + 1;
    }

    DS.dsCom.defineMessageStyle("Good", { dim: true, fg: "Magenta" });
  }



  getDimension() {
    const dimension = DS.worldData.currentDimension;
    return dimension;
  }
  _getLocation() {
    const location = DS.worldData.currentLocation;
    return location;
  }


  $draw() {
    if (!this.draw) return;
    let xOffset = 1;
    DS.dsCom.DIM.UNDERLINE.MAGENTA.showAt(this.label, { row: this.y, col: this.x }).CLEAR
      .DIM.MAGENTA.showAt(this.dimensionLabel, { row: this.y + 1, col: this.x + xOffset}).CLEAR
      .BR.CYAN.showAt(this.getDimension(), { row: this.y + 2, col: this.x + xOffset + 1 }).CLEAR
      .DIM.MAGENTA.showAt(this.locationLabel, { row: this.y + 4, col: this.x + xOffset }).CLEAR
      .BR.CYAN.showAt(this._getLocation(), { row: this.y + 5, col: this.x + xOffset + 1 }).CLEAR;
  }

  $run() {}

  $destroy() {}
}
