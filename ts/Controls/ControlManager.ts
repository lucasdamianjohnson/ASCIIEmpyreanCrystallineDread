import type { DivineStar } from "../DivineStar";

export type INPUTKeys = "up" | "left" | "down" | "right" | "enter";
export type INPUTChars = "m" | "h" | "x" | "z";

export class ControlManager {
  keyHooks: Record<INPUTKeys, {parent:any,func:Function}[]> = {
    up: [],
    left: [],
    down: [],
    right: [],
    enter: [],
  };
  charHooks: Record<INPUTChars,{parent:any,func:Function}[]> = {
    m: [],
    h: [],
    z: [],
    x: [],
  };

  constructor(public DS: DivineStar) {
    this._setUpHooks();
  }





  addToKeyHook(key : INPUTKeys , func : Function, parent:any){
      this.keyHooks[key].push({parent:parent,func:func});
  }

  addToCharHook(char : INPUTChars , func : Function, parent:any){
    this.charHooks[char].push({parent:parent,func:func});
}



  _setUpHooks() {
    //@ts-ignore
    this.DS.dsCom.onUserInputKey("ctrl+c", {run: (args: any) => {
            process.exit();
      },
      args: {},
    });

    //@ts-ignore
    this.DS.dsCom.onUserInputKey("up", {run: (args: any) => {
        for (const func of this.keyHooks["up"]) {
          func.func.call(func.parent);
        }
      },
      args: {},
    });
    //@ts-ignore
    this.DS.dsCom.onUserInputKey("down", { run: (args: any) => {
        for (const func of this.keyHooks["down"]) {
            func.func.call(func.parent);
        }
      },
      args: {},
    });
    //@ts-ignore
    this.DS.dsCom.onUserInputKey("left", {run: (args: any) => {
        for (const func of this.keyHooks["left"]) {
            func.func.call(func.parent);
        }
      },
      args: {},
    });
    //@ts-ignore
    this.DS.dsCom.onUserInputKey("right", {run: (args: any) => {
        for (const func of this.keyHooks["right"]) {
            func.func.call(func.parent);
        }
      },
      args: {},
    });
    //@ts-ignore
    this.DS.dsCom.onUserInputKey("enter", {run: (args: any) => {
        for (const func of this.keyHooks["right"]) {
            func.func.call(func.parent);
        }
      },
      args: {},
    });
//@ts-ignore
this.DS.dsCom.onUserInputChar("m", {run: (args: any) => {
    for (const func of this.charHooks["m"]) {
        func.func.call(func.parent);
    }
    },
    args: {},
});
//@ts-ignore
this.DS.dsCom.onUserInputChar("h", {run: (args: any) => {
    for (const func of this.charHooks["h"]) {
        func.func.call(func.parent);
    }
    },
    args: {},
});
//@ts-ignore
this.DS.dsCom.onUserInputChar("x", {run: (args: any) => {
  for (const func of this.charHooks["x"]) {
      func.func.call(func.parent);
  }
  },
  args: {},
});
//@ts-ignore
this.DS.dsCom.onUserInputChar("z", {run: (args: any) => {
  for (const func of this.charHooks["z"]) {
      func.func.call(func.parent);
  }
  },
  args: {},
});
    this.DS.dsCom.startUserInputCaptcher();
  }
}
