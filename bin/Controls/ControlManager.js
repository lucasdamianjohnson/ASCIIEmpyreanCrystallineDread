"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlManager = void 0;
class ControlManager {
    constructor(DS) {
        this.DS = DS;
        this.keyHooks = {
            up: [],
            left: [],
            down: [],
            right: [],
            enter: [],
        };
        this.charHooks = {
            m: [],
            h: [],
            z: [],
            x: [],
        };
        this._setUpHooks();
    }
    addToKeyHook(key, func, parent) {
        this.keyHooks[key].push({ parent: parent, func: func });
    }
    addToCharHook(char, func, parent) {
        this.charHooks[char].push({ parent: parent, func: func });
    }
    _setUpHooks() {
        //@ts-ignore
        this.DS.dsCom.onUserInputKey("ctrl+c", { run: (args) => {
                process.exit();
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputKey("up", { run: (args) => {
                for (const func of this.keyHooks["up"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputKey("down", { run: (args) => {
                for (const func of this.keyHooks["down"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputKey("left", { run: (args) => {
                for (const func of this.keyHooks["left"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputKey("right", { run: (args) => {
                for (const func of this.keyHooks["right"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputKey("enter", { run: (args) => {
                for (const func of this.keyHooks["right"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputChar("m", { run: (args) => {
                for (const func of this.charHooks["m"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputChar("h", { run: (args) => {
                for (const func of this.charHooks["h"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputChar("x", { run: (args) => {
                for (const func of this.charHooks["x"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        //@ts-ignore
        this.DS.dsCom.onUserInputChar("z", { run: (args) => {
                for (const func of this.charHooks["z"]) {
                    func.func.call(func.parent);
                }
            }, args: {}, });
        this.DS.dsCom.startUserInputCaptcher();
    }
}
exports.ControlManager = ControlManager;
