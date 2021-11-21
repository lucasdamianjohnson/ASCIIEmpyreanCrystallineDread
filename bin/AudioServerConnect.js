"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUpServer = void 0;
let server;
let testSocket;
let errorHappened = false;
function SetUpServer() {
    console.log("server set up");
    var port = 9090;
    server = net.createServer();
    server.listen(port);
    server.on("connection", (socket) => {
        //This is a standard net.Socket
        //    console.log(socket);
        console.log("hello again");
        testSocket = socket;
        socket.on("data", async (message) => {
            console.log("got some data");
            console.log(message.toString());
            socket.write("sup!");
            // await socket.connect();
        });
        socket.on("connect", (message) => {
            console.log("CONNECTED TO SOCKET");
            console.log(message);
        });
        socket.on("ready", () => {
            const dataStream = setInterval(() => {
                console.log("sending game data");
                if (!errorHappened) {
                    socket.write("here is the data");
                }
                else {
                    clearInterval(dataStream);
                }
            }, 100);
        });
        socket.on("error", (error) => {
            console.log(error);
            socket.destroy();
            errorHappened = true;
        });
        socket.on("close", () => {
            console.log("close");
            socket.destroy();
        });
    });
}
exports.SetUpServer = SetUpServer;
;
const closeServer = () => {
    testSocket.destroy();
    server.close();
    console.log("server closeed");
};
process.on("exit", () => {
    console.log("program eixting 2");
    closeServer();
});
process.on("SIGINT", () => {
    console.log("program eixting");
    process.exit(1);
});
