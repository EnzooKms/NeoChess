const { Server } = require("socket.io");
const gameSocket = require("./gameSocket.js");

const runner = (server) => {
  const io = new Server(server, {});

  io.on("connection", (socket) => {
    console.log(`New connection`);
  });

  /**
   * game socket
   */
  gameSocket(io);
};

module.exports = runner;
