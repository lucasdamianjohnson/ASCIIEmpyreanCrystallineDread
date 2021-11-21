"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleSpawnerEntity = void 0;
class ParticleSpawnerEntity {
    constructor(data, id, type = "Rain", x, y) {
        this.data = data;
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.tickInterval = 20;
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
        this.fgColor = "Cyan";
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
                text: "╏",
                styleObj: { fg: this.fgColor, dim: false },
                interval: 2,
            },
            {
                text: "┇",
                styleObj: { fg: this.fgColor, dim: false },
                interval: 2,
            },
            {
                text: "┋",
                styleObj: { fg: this.fgColor, dim: false },
                interval: 2,
            },
        ];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                respawnCount: (Math.random() * 10) >>> 0,
                alive: true,
                x: ((Math.random() * DS.screenWidth) >>> 0) + 2,
                y: ((Math.random() * DS.screenHeight) >>> 0) + 2,
            });
        }
    }
    _runRain() {
        for (const particle of this.particles) {
            if (!particle.respawnCount) {
                particle.y++;
                if (particle.x >= DS.screenWidth || particle.y > DS.screenHeight + 1) {
                    particle.x = ((Math.random() * DS.screenWidth) >>> 0) + 1;
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
                text: "|",
                styleObj: { fg: "Cyan", dim: true },
                interval: 4,
            },
            {
                text: "0",
                styleObj: { fg: "Cyan", bright: true },
                interval: 4,
            },
        ];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                respawnCount: (Math.random() * 10) >>> 0,
                alive: true,
                x: ((Math.random() * DS.screenWidth) >>> 0) + 10,
                y: 2,
            });
        }
    }
    _runSparkle() {
        for (const particle of this.particles) {
            if (!particle.respawnCount) {
                particle.y++;
                if (particle.x >= DS.screenWidth || particle.y > DS.screenHeight + 1) {
                    particle.x = ((Math.random() * DS.screenWidth) >>> 0) + 5;
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
        const text = DS.dsCom.stylize(frame.text, frame.styleObj);
        for (const particle of this.particles) {
            if (!particle.respawnCount) {
                DS.dsCom.showAt(text, { row: particle.y, col: particle.x });
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
}
exports.ParticleSpawnerEntity = ParticleSpawnerEntity;
