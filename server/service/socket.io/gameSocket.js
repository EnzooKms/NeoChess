const { Server } = require("socket.io");
const Chessboard = require("../chess/gameState.js");
const game = [];

/**
 *
 * @param {Server} io
 */
const gameSocket = (io) => {
  const gameSocket = io.of("/game");
  gameSocket.on("connection", (socket) => {
    socket.on("join-room", (room) => {
      const alreadyExist = game.find((el) => el.id === room);
      if (!alreadyExist) {
        const board = new Chessboard(room);
        game.push(board);
      }

      const state = game.find((el) => el.id === room);
      socket.join(room);

      socket.emit("join-room", state);

      const size = gameSocket.adapter.rooms.get(room).size;
      if (size === 2) {
        state.started = true;
      }
      gameSocket.to(room).emit("game-start", !!state.started);
    });

    socket.on("playMove", (room, c, n) => {
      const state = game.find((el) => el.id === room);
      console.log(room, c, n);
      const gameState = state.movePiece(c.x, c.y, n.x, n.y);
      gameSocket.to(room).emit("update-state", gameState);
    });
  });
};

module.exports = gameSocket;
