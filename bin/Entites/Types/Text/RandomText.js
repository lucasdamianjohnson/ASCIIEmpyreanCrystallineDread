"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomText = void 0;
//Harmless passive creatures 
class RandomText {
    constructor(data, id, type, x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.battleSceneRandomText = [
            "My power comes through the heat\nof 10,000 burning suns\nyet the crystalline fear challenges me. ",
            "Not since infinity split has something\nthis dense and dark has spawned\nin the multiverse. ",
            "I feel the fear forms pouring\nthrough the nexus\nThrough the eons they are slowing\nthe vibration of the entire universe.",
            "I shall conquer all fear with valiant light.",
            "My cosmic throne shall not be thwarted\n by these corruptions of consciousness.",
            "I shall send this being of fear\n back into the core of being.",
            `Forever and Now\nI am the mighty master of trillions.\nI weave time and space.
Yet these forms pose a threat\n to the whole balance of reality. `
        ];
        this.drawText = [""];
        this.draw = true;
        if (data.fgColor) {
        }
        if (type == "BattleScene") {
            const randNum = ((Math.random() * this.battleSceneRandomText.length) >>> 0);
            this.drawText = this.battleSceneRandomText[randNum].split("\n");
            this.y = (((SCREENHEIGHT - this.drawText.length) / 2) >>> 0) + 2;
        }
    }
    $draw() {
        if (!this.draw)
            return;
        let rowBuf = 0;
        for (const text of this.drawText) {
            let collumn = (((SCREENWIDTH - text.length) / 2) >>> 0) + 1;
            DS.dsCom.showAt(text, { row: this.y + rowBuf, col: collumn });
            rowBuf++;
        }
    }
    $run() {
    }
    $destroy() {
    }
}
exports.RandomText = RandomText;
