/*************************************************************
 *
 * Game router with get http verb
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/game/:id", async (req, res) => {
  const translate = req.load("chess/game");
  const langName = req.params.language || config.default_language;

  const { sequelize } = require("../../../service/database/models/");
  const Game = sequelize.models.Game;
  const game = await Game.findByPk(req.params.id);

  /** if game doesn't */
  if (!game) return res.sendStatus(404);

  const GameUser = sequelize.models.GameUser;
  const count = await GameUser.findAll({
    where: { idGame: game.id },
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("color")), "playerAtGame"],
    ],
  });
  const findAll = await GameUser.findAll({
    where: { idGame: game.id },
  });

  const isOpenToJoin = count[0].dataValues.playerAtGame >= 2;
  const isReconnecting =
    findAll[0].dataValues.idUser === req.session.user.id ||
    findAll[1]?.dataValues.idUser === req.session.user.id;
  if (isOpenToJoin && !isReconnecting) {
    return res.send("this game have already 2 player");
  }

  const gameUser = await GameUser.findOrCreate({
    where: { idGame: game.id, idUser: req.session.user.id },
    defaults: { idGame: game.id, idUser: req.session.user.id, color: "black" },
  });

  const gameData = {
    gameId: game.id,
    user: req.session.user,
    color: gameUser[0].dataValues.color,
  };

  console.log(gameData);

  if (translate) {
    res.render("chess/game", {
      translate,
      langName,
      h: req.helper,
      gameData,
    });
  }
});

module.exports = { get };
