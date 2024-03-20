import Game from "./html.js";
import { func } from "./piece/exports.js";
function event(e) {
  const index =
    63 -
    Array.from(e.target.parentNode.parentNode.childNodes).indexOf(
      e.target.parentNode
    );
  const x = index % 8;
  const y = (index - (index % 8)) / 8;
  const current = Game.Game[y][x];

  if (!current) return;

  Game.selected(e.target);
  Game.reset();
  func[current.piece](current, e);
}

export default event;
