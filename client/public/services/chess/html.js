import { playMove } from "../socket.io/game.js";
import event from "./event.js";

class Game {
  static Game;
  static cg_board = document.querySelector("cg-board");
  static color = JSON.parse(
    document.querySelector("input[data-game]").getAttribute("data-game")
  ).color;

  static reset() {
    /** remove the square with dot */
    document
      .querySelectorAll("square.move-dest")
      .forEach((square) => square.remove());
  }

  static resize() {
    const boardSize = this.cg_board.offsetHeight;
    const squareSize = boardSize / 8;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = this.getSquareElementAt(x, y);

        if (!piece) continue;

        const transform = `translate(${x * squareSize}px, ${y * squareSize}px)`;
        piece.style.transform = transform;
      }
    }
  }

  static render() {
    this.cg_board.innerHTML = "";
    const boardSize = this.cg_board.offsetHeight;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = document.createElement("piece");
        const whiteOrBlack = (x + y) % 2 === 0 ? "w" : "b";
        piece.classList.add(whiteOrBlack);

        this.cg_board.prepend(piece);

        const chessPiece = this.Game[y][x];
        if (chessPiece) {
          this.loadImage(piece, chessPiece);
        }
      }
    }
    this.resize();

    if (this.color === "black") {
      this.cg_board.classList.add("blackBoard");
    }

    // console.log(JSON.stringify(this.Game));
  }

  static loadImage(element, piece) {
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `/resources/assets/chess/theme/default/${piece.piece}_${piece.color}.png`
    );

    element.appendChild(img);
  }

  static start() {
    const pieces = document.querySelectorAll("piece");

    for (const piece of pieces) {
      piece.addEventListener("click", event);
    }
  }

  static selected(element) {
    for (const square of document.querySelectorAll("img")) {
      square.classList.remove("selected");
    }

    element.classList.add("selected");
  }

  static getSquareElementAt(x, y) {
    const squares = document.querySelectorAll("piece");
    const index = 63 - (y * 8 + x);
    return squares[index];
  }

  static getSquareAt(x, y) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      // Vérifier si les coordonnées sont en dehors du plateau
      return null;
    }
    return this.Game[y][x];
  }

  static createDestElementAt(square, current) {
    const dest = document.createElement("square");
    dest.classList.add("move-dest");
    square.appendChild(dest);

    const index = 63 - Array.from(square.parentNode.childNodes).indexOf(square);
    const currentPosition = { x: current.state.x, y: current.state.y };
    const finalPosition = { x: index % 8, y: (index - (index % 8)) / 8 };

    dest.addEventListener("click", () => {
      // Émettre un événement vers le serveur pour indiquer que le joueur souhaite déplacer la pièce
      playMove(currentPosition, finalPosition);
      console.log(currentPosition, finalPosition);
      // Ajoutez ici du code pour indiquer visuellement que le déplacement a été effectué
    });

    // Ajouter un gestionnaire d'événements de glisser-déposer pour l'élément
    dest.addEventListener("dragover", (event) => {
      event.preventDefault(); // Empêcher le comportement par défaut
    });

    dest.addEventListener("drop", (event) => {
      event.preventDefault(); // Empêcher le comportement par défaut

      // Ajoutez ici du code pour gérer le déplacement de la pièce via glisser-déposer
    });
  }
}

export default Game;
