import Game from "../chess/html.js";

const socket = io("/game");
const dataGame = JSON.parse(
  document.querySelector("input[data-game]").getAttribute("data-game")
);

function set(game) {
  (Game.Game = game.board), (Game.currentPlayer = game.currentPlayer);
  Game.render();
}

socket.emit("join-room", dataGame.gameId);

socket.on("join-room", (game) => {
  console.log(game);
  set(game);
});

socket.on("game-start", (isStart) => {
  if (isStart) Game.start();
});

const playMove = (current, final) => {
  socket.emit("playMove", dataGame.gameId, current, final);
};

socket.on("update-state", (game) => {
  console.log(game);
  set(game);
});

export { playMove };
