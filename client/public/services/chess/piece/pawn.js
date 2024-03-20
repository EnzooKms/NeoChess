import Game from "../html.js";

const pawn = (current, e) => {
  const direction = current.color === "white" ? 1 : -1;
  const { x, y } = current.state;

  // Récupérer les cases voisines
  const forwardBy1 = Game.getSquareAt(x, y - direction);
  const forwardBy2 = !current.alreadyMoved
    ? Game.getSquareAt(x, y + 2 * direction)
    : null;

  // Récupérer les éléments HTML correspondants
  const forwardBy1Element = Game.getSquareElementAt(x, y - direction);
  const forwardBy2Element = !current.alreadyMoved
    ? Game.getSquareElementAt(x, y - 2 * direction)
    : null;

  Game.createDestElementAt(forwardBy1Element, current);
  Game.createDestElementAt(forwardBy2Element, current);
};

export default pawn;
