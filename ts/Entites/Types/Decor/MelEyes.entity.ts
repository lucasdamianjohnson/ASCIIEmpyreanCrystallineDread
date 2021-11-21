import type { DivineStar } from "../../../DivineStar";
import { SceneTypes } from "../../../meta/Scene/Scene.types";
import { EntityInterface } from "../../Entity.interface";


declare const DS: DivineStar;

export class MelEyesEntity implements EntityInterface {
    tickInterval = 1;
    tickCount = 0;

    collumn = 0;
    currentEye = 0;
    eyeNum = 5;

    draw  = true;

    eyeOne = "";
    eyeTwo = "";


    constructor(
        public data : any,
        public id: string,
        public type: string,
        public x: number,
        public y: number,
        public sceneType : SceneTypes
      ) {

     
        if(type=="bottom-bar" || type=="bottom-right-bar") {
          this.eyeOne =<string> DS.dsCom.DIM.cyan("0");
          this.eyeTwo =<string> DS.dsCom.BRIGHT.cyan("0");
          
          this.y = this.y += SCREENHEIGHT + 1;
          if(type=="bottom-right-bar"){
            this.collumn = SCREENWIDTH + 3;
          }
        } else {
          this.collumn = SCREENWIDTH + 3;
          this.eyeOne =<string> DS.dsCom.DIM.cyan("00");
          this.eyeTwo =<string> DS.dsCom.BRIGHT.cyan("00");
        }
      }

      $draw() {
       
        for(let i = 0; i < this.eyeNum; i++) {
            let show = this.eyeOne;
            if(i == this.currentEye) {
                show = this.eyeTwo;
            } 
            DS.dsCom.showAt(show,{row:this.y + i,col:this.collumn + this.x});
           
        }

      }


      _runTick(){

        if(this.currentEye > this.eyeNum - 1) {
            this.currentEye = 0;
        } else {
            this.currentEye++;
        }

      }

      $run() {

        if(this.tickCount == 0) {

            this._runTick();

            this.tickCount = this.tickInterval;
        } else {
            this.tickCount--;
        }
      }
    

      $destroy() {
        
      }
}