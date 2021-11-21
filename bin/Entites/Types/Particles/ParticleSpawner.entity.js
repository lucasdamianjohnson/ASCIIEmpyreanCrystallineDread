"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleSpawnerEntity = void 0;
class ParticleSpawnerEntity {
    constructor(data, id, type = "Rain", x, y, sceneType) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.sceneType = sceneType;
        this.tickInterval = 5;
        this.tickCount = 0;
        this.particleCount = 50;
        this.particles = [];
        this.active = true;
        this.draw = true;
        this.keyFrames = [];
        this.animtionInterval = 10;
        this.animtationCount = 0;
        this.currentFrame = 0;
        this.maxFames = 0;
        this.fgColor = "White";
        if (data.fgColor) {
            this.fgColor = data.fgColor;
        }
        this._setUpKeyFrames();
    }
    _setUpKeyFrames() {
        if (this.type == "Rain") {
            this._makeRain();
        }
        if (this.type == "Sparkle") {
            this._makeSparkle();
        }
        this.maxFames = this.keyFrames.length;
    }
    _makeRain() {
        this.keyFrames = [
            {
                animText: "╏",
                style: { fg: this.fgColor, dim: false },
                interval: 2,
            },
            {
                animText: "┇",
                style: { fg: this.fgColor, dim: false },
                interval: 2,
            },
            {
                animText: "┋",
                style: { fg: this.fgColor, dim: false },
                interval: 2,
            },
        ];
        this.keyFrames =
            DS.animationHelper.preprocessStyleKeyFrames({ "1": this.keyFrames })["1"];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                respawnCount: (Math.random() * 10) >>> 0,
                alive: true,
                x: ((Math.random() * SCREENWIDTH) >>> 0) + 2,
                y: ((Math.random() * SCREENHEIGHT) >>> 0) + 2,
            });
        }
    }
    async _runRain() {
        for (const particle of this.particles) {
            if (!particle.respawnCount) {
                particle.y++;
                if (particle.x >= SCREENWIDTH || particle.y > SCREENHEIGHT + 1) {
                    particle.x = ((Math.random() * SCREENWIDTH) >>> 0) + 1;
                    particle.y = 2;
                    particle.respawnCount = (Math.random() * 10) >>> 0;
                }
            }
            else {
                particle.respawnCount--;
            }
        }
    }
    _makeSparkle() {
        this.keyFrames = [
            {
                animText: "|",
                style: { fg: "Cyan", dim: true },
                interval: 4,
            },
            {
                animText: "0",
                style: { fg: "Cyan", bright: true },
                interval: 4,
            },
        ];
        this.keyFrames =
            DS.animationHelper.preprocessStyleKeyFrames({ "1": this.keyFrames })["1"];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                respawnCount: (Math.random() * 10) >>> 0,
                alive: true,
                x: ((Math.random() * SCREENWIDTH) >>> 0) + 10,
                y: 2,
            });
        }
    }
    async _runSparkle() {
        for (const particle of this.particles) {
            if (!particle.respawnCount) {
                particle.y++;
                if (particle.x >= SCREENWIDTH || particle.y > SCREENHEIGHT + 1) {
                    particle.x = ((Math.random() * SCREENWIDTH) >>> 0) + 5;
                    particle.y = 2;
                    particle.respawnCount = (Math.random() * 10) >>> 0;
                }
            }
            else {
                particle.respawnCount--;
            }
        }
    }
    $run() {
        if (!this.active)
            return;
        if (this.tickCount == 0) {
            switch (this.type) {
                case "Rain":
                    this._runRain();
                    break;
                case "Sparkle":
                    this._runSparkle();
                    break;
            }
        }
        else {
            this.tickCount--;
        }
    }
    $draw() {
        if (!this.draw)
            return;
        const frame = this.keyFrames[this.currentFrame];
        //   const text = DS.dsCom.stylize(frame.animText, frame.style);
        for (const particle of this.particles) {
            if (!particle.respawnCount) {
                DS.dsCom.showAt(frame.animText, { row: particle.y, col: particle.x });
            }
        }
        if (this.animtationCount == 0) {
            if (this.currentFrame < this.maxFames - 1) {
                this.currentFrame++;
            }
            else {
                this.currentFrame = 0;
            }
            const newFrame = this.keyFrames[this.currentFrame];
            this.animtationCount = newFrame.interval;
        }
        else {
            this.animtationCount--;
        }
    }
    $destroy() {
    }
}
exports.ParticleSpawnerEntity = ParticleSpawnerEntity;
