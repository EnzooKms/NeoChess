import Game from "../services/chess/html.js";

const container = document.querySelector("cg-container");

const resize = () => {
  const size = (innerHeight + innerWidth) / 3.6;

  container.style.width = `${size}px`;
  container.style.height = `${size}px`;
  Game.resize();
};

addEventListener("resize", resize);
dispatchEvent(new Event("resize"));
