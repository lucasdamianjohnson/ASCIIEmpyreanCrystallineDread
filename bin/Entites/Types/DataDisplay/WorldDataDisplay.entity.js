"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldDataDisplayEntity = void 0;
//Harmless passive creatures
class WorldDataDisplayEntity {
    constructor(data, id, type, x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.nameStyle = {
            dim: true,
            fg: "Magenta",
        };
        this.label = "World";
        this.dimensionLabel = "Current Dimension:";
        this.locationLabel = "Current Location:";
        this.draw = true;
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
        if (!this.draw)
            return;
        let xOffset = 1;
        DS.dsCom.DIM.UNDERLINE.MAGENTA.showAt(this.label, { row: this.y, col: this.x }).CLEAR
            .DIM.MAGENTA.showAt(this.dimensionLabel, { row: this.y + 1, col: this.x + xOffset }).CLEAR
            .BR.CYAN.showAt(this.getDimension(), { row: this.y + 2, col: this.x + xOffset + 1 }).CLEAR
            .DIM.MAGENTA.showAt(this.locationLabel, { row: this.y + 4, col: this.x + xOffset }).CLEAR
            .BR.CYAN.showAt(this._getLocation(), { row: this.y + 5, col: this.x + xOffset + 1 }).CLEAR;
    }
    $run() { }
    $destroy() { }
}
exports.WorldDataDisplayEntity = WorldDataDisplayEntity;
