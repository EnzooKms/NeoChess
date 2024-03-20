/*************************************************************
 *
 * Game router with get http verb
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/game/create", async (req, res) => {
  const langName = req.params.language || config.default_language;

  const { sequelize } = require("../../../service/database/models/");
  const Game = sequelize.models.Game;
  const GameUser = sequelize.models.GameUser;

  const game = await Game.create();
  const gameUser = await GameUser.create({
    idGame: game.id,
    idUser: req.session.user.id,
    color: "white",
  });

  res.status(200).redirect(`/${langName}/game/${game.id}`);
});

module.exports = { get };
