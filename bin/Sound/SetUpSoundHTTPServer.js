"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUpSoundHTTPServer = void 0;
async function SetUpSoundHTTPServer() {
    const http = require('http');
    http.createServer(async (req, res) => {
        const headers = {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Max-Age': 2592000, // 30 days
            /** add other headers as per requirement */
        };
        //  console.log(req.url);
        if (!req.url.includes("/data")) {
            res.writeHead(200, headers);
            const index = await fs.readFile("./html/index.html", "utf-8");
            res.write(index);
        }
        else {
            if (req.url.includes("/data/music")) {
                //audio/mpeg
                console.log(req.url);
                const song = await fs.readFile(`.${req.url}`);
                console.log(song);
                res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
                res.end(song, 'utf-8');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.write(`{
        "test" : "hello"
      }`);
        }
        res.end();
    }).listen(8080);
}
exports.SetUpSoundHTTPServer = SetUpSoundHTTPServer;
