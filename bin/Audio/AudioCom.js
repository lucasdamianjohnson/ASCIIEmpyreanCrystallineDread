"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioCom = void 0;
class AudioCom {
    constructor(httpPort = 8080) {
        this.httpPort = httpPort;
        this.connected = false;
        this.messageQue = {};
        this.currentSoundData = {
            playsound: false,
        };
        this.count = 0;
        this.htmlHeaders = {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        };
        this.jsHeader = { "Content-Type": "text/javascript" };
        this.audioHeader = { "Content-Type": "audio/mpeg" };
        this.dataHeader = { "Content-Type": "text/json" };
    }
    requestPlay(type, id, loop = false) {
        this.count++;
        const ID = `${this.count}`;
        if (this.count > 100000) {
            this.count = 0;
        }
        ;
        this.messageQue[ID] = {
            type: type,
            id: id,
            loop: loop,
        };
        let timeout = 500;
        if (type == "song") {
            timeout = 10000;
        }
        setTimeout(() => {
            //@ts-ignore
            this.messageQue[ID] = undefined;
            delete this.messageQue[ID];
        }, timeout);
        /*     const prom = new Promise((resolve) => {
              const check = (inte: any) => {
                console.log(this.messageQue[ID],ID);
                if (this.messageQue[ID] == undefined) {
                  clearInterval(inte);
                  DS.dsCom.showAt("testing",{row:5,col:70});
                  resolve(true);
                }
              };
              const inte = setInterval(() => {
                check(inte);
        
              }, 1);
              check(inte);
            });
            return prom; */
    }
    async _getHTML(path, res) {
        let index;
        console.log(path);
        if (path == "/start") {
            if (!this.connected) {
                res.writeHead(200, this.htmlHeaders);
                index = "<p>done</p<";
                this.connected = true;
            }
        }
        else if (path == "/") {
            res.writeHead(200, this.htmlHeaders);
            index = await fs.readFile("./html/index.html", "utf-8");
        }
        else {
            if (path.includes("js")) {
                res.writeHead(200, this.jsHeader);
                if (!path.includes(".js")) {
                    path += ".js";
                }
                index = await fs.readFile(`./html/${path}`, "utf-8");
            }
        }
        res.end(index);
    }
    async _getSong(path, res) {
        const song = await fs.readFile(`.${path}`);
        res.writeHead(200, this.audioHeader);
        res.end(song, "utf-8");
    }
    async _getData(path, res) {
        if (path == "/data/update") {
            res.writeHead(200, this.dataHeader);
            res.end(JSON.stringify(this.messageQue), "utf-8");
        }
        else if (path.includes("/data/complete")) {
            const id = path.replace("/data/complete=", "");
            //@ts-ignore
            this.messageQue[id] = undefined;
            delete this.messageQue[id];
        }
        else {
            const data = await fs.readFile(`.${path}`, "utf-8");
            res.writeHead(200, this.dataHeader);
            res.end(JSON.stringify(data), "utf-8");
        }
    }
    $awaitConnection() {
        const prom = new Promise((resolve) => {
            const check = (inte) => {
                if (this.connected) {
                    clearInterval(inte);
                    resolve(true);
                }
            };
            const inte = setInterval(() => {
                check(inte);
            }, 1);
            check(inte);
        });
        return prom;
    }
    $init() {
        const http = require("http");
        http
            .createServer(async (req, res) => {
            const path = req.url;
            if (path.includes("favicon"))
                return;
            if (path.includes("/js/") || path == "/" || path == "/start") {
                await this._getHTML(path, res);
            }
            else {
                if (path.includes("/assets")) {
                    await this._getSong(req.url, res);
                    return;
                }
                await this._getData(path, res);
            }
        })
            .listen(this.httpPort);
    }
}
exports.AudioCom = AudioCom;
