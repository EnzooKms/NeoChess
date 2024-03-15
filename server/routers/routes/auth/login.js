/*************************************************************
 *
 * Auth/login router
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/login", (req, res) => {
  const translate = req.load("auth/login", "login");
  const langName = req.params.language;

  if (translate) {
    res.render("auth/login", {
      translate,
      langName,
      h: req.helper,
      old: req.session.old,
      errors: req.session.errors,
    });
  }
});

const post = route.route("/:lanuage?/login", async (req, res) => {
  const { username, password } = req.body;
  const langName = req.params.language || config.default_language;
  const { sequelize } = require("../../../service/database/models/");
  const User = sequelize.models.User;
  const user = await User.findOne({
    where: {
      username,
      password,
    },
  });

  if (user) {
    console.log(user.dataValues);
    req.session.user = {
      username: user.dataValues.username,
      id: user.dataValues.id,
      createdAt: user.dataValues.createdAt,
    };
    res.redirect("/");
  } else {
    const error = "notExist";
    const msgError = require("../../../langue/errors.js")[langName].ORM[error];
    req.session.errors = { msgError };
    req.session.old = { username, password };
    res.redirect(`/${langName}/login`);
  }
});

module.exports = { get, post };
