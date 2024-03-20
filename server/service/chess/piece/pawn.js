class Pawn {
  constructor(color, state) {
    this.alreadyMove = false;
    this.piece = "pawn";
    this.color = color;
    this.state = state;
  }

  /** move logic */
  move(newX, newY) {
    const { x, y } = this.state;

    // Vérifie si le déplacement est valide pour le pion
    if (this.isValidMove(x, y, newX, newY)) {
      // Mettre à jour l'état du pion après le déplacement
      this.state = { x: newX, y: newY };
      this.alreadyMoved = true; // Marquer le pion comme déjà déplacé
      return true; // Le déplacement est effectué avec succès
    } else {
      return false; // Le déplacement est invalide
    }
  }

  // Vérifie si le déplacement est valide pour le pion
  isValidMove(currentX, currentY, newX, newY) {
    const direction = this.color === "white" ? -1 : 1; // Direction du mouvement en fonction de la couleur du pion
    const forwardBy1 = currentY + direction === newY && currentX === newX; // Déplacement d'une case vers l'avant
    const forwardBy2 =
      !this.alreadyMoved &&
      currentY + 2 * direction === newY &&
      currentX === newX; // Déplacement de deux cases vers l'avant au premier mouvement
    const capture =
      Math.abs(currentX - newX) === 1 && currentY + direction === newY; // Prise diagonale d'une pièce adverse

    // Le déplacement est valide si c'est un déplacement d'une case vers l'avant ou de deux cases vers l'avant au premier mouvement, ou une prise diagonale valide
    return forwardBy1 || (forwardBy2 && !capture) || capture;
  }
}

module.exports = Pawn;
