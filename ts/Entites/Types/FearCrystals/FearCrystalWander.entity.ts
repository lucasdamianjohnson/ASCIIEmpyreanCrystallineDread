import type { DivineStar } from "../../../DivineStar";
import { probability } from "../../../Helper/Helper";
import { FearFormBattleSet } from "../../../meta/FearmForms/FearForm.types";
import { SceneTypes } from "../../../meta/Scene/Scene.types";
import { direction } from "../../../meta/Util.types";
import { EntityInterface } from "../../Entity.interface";
declare const DS: DivineStar;

export class FearCrystalWanderEntity implements EntityInterface {
  tickInterval = 5;
  tickCount = 0;
  walls = ["|", "*", "_", "-", "(", ")", "=", "█"];
  entityWidth = 2;
  entityHeight = 2;

  animtionInterval = 10;
  animtationCount = 0;
  keyFrames: { interval: number; text: string; styleObj: StyleObject }[] = [
    {
        text: " [ ] ",
        styleObj: {fg:"Red",dim:true},
        interval: 2,
      },
    {
      text: " [╬] ",
      styleObj: {fg:"Red",bright:true},
      interval: 2,
    },
    {
      text: "[<╬>]",
      styleObj: {fg:"Red",dim:true},
      interval: 2,
    },
    {
        text: "<<╬>>",
        styleObj: {fg:"Red",bright:true},
        interval: 2,
      },
      {
        text: "[<╬>]",
        styleObj: {fg:"Red",dim:true},
        interval: 2,
      },
    {
      text: " [0] ",
      styleObj: {fg:"Red",bright:true},
      interval: 2,
    },
    {
      text: "[<0>]",
      styleObj: {fg:"Red",dim:true},
      interval: 2,
    },
    {
        text: " [0] ",
        styleObj: {fg:"Red",bright:true},
        interval: 2,
      },
    {
      text: "[{░}]",
      styleObj: {fg:"Red",dim:true},
      interval: 2,
    },
    {
      text: "[<▒>]",
      styleObj: {fg:"Red",bright:true},
      interval: 2,
    },
    {
      text: "<<▓>>",
      styleObj: {fg:"Red",dim:true},
      interval: 2,
    },
    {
      text: "[<▒>]",
      styleObj: {fg:"Red",bright:true},
      interval: 2,
    },
    {
      text: "[{░}]",
      styleObj: {fg:"Red",dim:true},
      interval: 2,
    },
    {
        text: " [░] ",
        styleObj: {fg:"Red",bright:true},
        interval: 2,
      },
  ];

  currentFrame = 0;
  maxFames = this.keyFrames.length;

  draw = true;
  active = true;

  constructor(
    public data: FearFormBattleSet,
    public id: string,
    public type: string,
    public x: number,
    public y: number,
    public sceneType : SceneTypes
  ) {}

  _getProbality(going: direction, value: number) {
    if (going == "left" && value > 0) {
      return 0.85;
    } else if (going == "left") {
      return 0.3;
    }

    if (going == "right" && value < 0) {
      return 0.85;
    } else if (going == "right") {
      return 0.3;
    }

    if (going == "up" && value > 0) {
      return 0.85;
    } else if (going == "up") {
      return 0.3; 
    }

    if (going == "down" && value <= 0) {
      return 0.85;
    } else if (going == "down") {
      return 0.3;
    }
    return 0.3;
  }


  _playerCollide(){
    if(DS.battleManager.battleActive)return;
    DS.battleManager.enterBattle(this.data);
  }

  $run() {
    if (!this.active) return;
    const xDif = this.x - DS.player.x;
    const yDif = this.y - DS.player.y;

    if(!xDif && !yDif) {
        this._playerCollide();
    }

    if (this.tickCount == 0) {
      if (probability(0.2)) {
        //do nothing
      } else {
        if (probability(this._getProbality("right", xDif))) {
          if (!this._collisionCheck("right") && this.x + 3 < SCREENWIDTH) {
            this.x++;
            return;
          }
        }
        if (probability(this._getProbality("left", xDif))) {
          if (!this._collisionCheck("left") && this.x != 1) {
            this.x--;
            return;
          }
        }
        if (probability(this._getProbality("up", yDif))) {
          if (!this._collisionCheck("up") && this.y  > 2) {
            this.y--;
            return;
          }
        }
        if (probability(this._getProbality("down", yDif))) {
          if (this.y - 1 < SCREENHEIGHT) {
            if (!this._collisionCheck("down")) {
              this.y++;
              return;
            }
          }
        }
      }
    } else {
      this.tickCount--;
    }
  }

  _collisionCheck(going: "up" | "down" | "left" | "right") {
    let hitWall = false;
    let data: string[] = [];
    switch (going) {
        
      case "up":
        try{
        if(this.y == 2) return true;
        data = DS.engine.readWorldDataSection(
          this.y - 3,
          this.y - 3,
          this.x - 1,
          this.x + 1
        );
        }catch(error) {
            console.log(this.y);
            console.log(going);
            console.log(error);
            DS.dsCom.DIE;
        }

        break;
      case "down":
        try{
          data = DS.engine.readWorldDataSection(
            this.y - 1,
            this.y - 1,
            this.x - 1,
            this.x + 1
          );
        }catch(error) {
            console.log(going);
            console.log(error);
            DS.dsCom.DIE;
        }
       

        break;
      case "right":
    
      try{
          data = DS.engine.readWorldDataSection(
            this.y - 2,
            this.y + 1,
            this.x + 6,
            this.x + 6
          );
        }catch(error) {
            console.log(going);
            console.log(error);
            DS.dsCom.DIE;
        }
       

        break;
      case "left":
      
      try{
          data = DS.engine.readWorldDataSection(
            this.y - 2,
            this.y + 2,
            this.x - 2,
            this.x - 2
          );
      }catch(error) {
        console.log(going);
        console.log(error);
        DS.dsCom.DIE;
    }
   
        break;

      default:
        break;
    }

    for (const strings of data) {
      for (const chars of strings) {
        //   DS.dsCom.INFO.showAt(`${going} ${chars}`, { row: 0, col: 80 }).CLEAR;
        if (this.walls.indexOf(chars) > -1) {
          hitWall = true;
          //   DS.dsCom.ERROR.showAt("HIT WALL", { row: 4, col: 55 }).CLEAR;
          continue;
        }
      }
    }


    return hitWall;
  }

  $draw() {
    if (!this.draw) return;
    const frame = this.keyFrames[this.currentFrame];
    
    const text = DS.dsCom.stylize(frame.text, frame.styleObj);
    DS.dsCom.showAt(text, { row: this.y, col: this.x });

    if (this.animtationCount == 0) {
      if (this.currentFrame < this.maxFames - 1 ) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
      const newFrame = this.keyFrames[this.currentFrame];
      this.animtationCount = newFrame.interval;
    } else {
      this.animtationCount--;
    }
  }


  $destroy() {
        
  }

}
