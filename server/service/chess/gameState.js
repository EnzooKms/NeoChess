const {
  Bishop,
  King,
  Knight,
  Pawn,
  Queen,
  Rook,
} = require("./piece/export.js");
class Chessboard {
  constructor(room) {
    this.id = room;
    this.board = new Array(8).fill(null).map(() => new Array(8).fill(null));
    this.currentPlayer = "white"; // Initialiser le joueur actif comme Blancs
    this.placeStartingPieces();
  }

  // Méthode pour changer de joueur actif
  togglePlayer() {
    this.currentPlayer = this.currentPlayer === "white" ? "black" : "white";
  }

  placePiece(x, y, piece) {
    this.board[y][x] = piece;
    // console.log(this.board[y][x]);
  }

  placeStartingPieces() {
    // Placer les pièces pour le joueur blanc
    this.placePiece(0, 7, new Rook("white", { x: 0, y: 7 }));
    this.placePiece(1, 7, new Knight("white", { x: 1, y: 7 }));
    this.placePiece(2, 7, new Bishop("white", { x: 2, y: 7 }));
    this.placePiece(3, 7, new Queen("white", { x: 3, y: 7 }));
    this.placePiece(4, 7, new King("white", { x: 4, y: 7 }));
    this.placePiece(5, 7, new Bishop("white", { x: 5, y: 7 }));
    this.placePiece(6, 7, new Knight("white", { x: 6, y: 7 }));
    this.placePiece(7, 7, new Rook("white", { x: 7, y: 7 }));
    for (let i = 0; i < 8; i++) {
      this.placePiece(i, 6, new Pawn("white", { x: i, y: 6 }));
    }

    // Placer les pièces pour le joueur noir
    this.placePiece(0, 0, new Rook("black", { x: 0, y: 0 }));
    this.placePiece(1, 0, new Knight("black", { x: 1, y: 0 }));
    this.placePiece(2, 0, new Bishop("black", { x: 2, y: 0 }));
    this.placePiece(3, 0, new Queen("black", { x: 3, y: 0 }));
    this.placePiece(4, 0, new King("black", { x: 4, y: 0 }));
    this.placePiece(5, 0, new Bishop("black", { x: 5, y: 0 }));
    this.placePiece(6, 0, new Knight("black", { x: 6, y: 0 }));
    this.placePiece(7, 0, new Rook("black", { x: 7, y: 0 }));
    for (let i = 0; i < 8; i++) {
      this.placePiece(i, 1, new Pawn("black", { x: i, y: 1 }));
    }
  }
  movePiece(fromX, fromY, toX, toY) {
    const piece = this.board[fromY][fromX];
    if (piece && piece.move(toX, toY)) {
      this.board[toY][toX] = piece;
      this.board[fromY][fromX] = null;
      this.togglePlayer(); // Changer de joueur après le coup réussi
      return this; // Le déplacement a réussi
    }
    return false; // Le déplacement est invalide ou aucune pièce n'est présente sur la case de départ
  }
}

module.exports = Chessboard;
