/*************************************************************
 *
 * Auth/register router
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/register", (req, res) => {
  const translate = req.load("auth/register");
  const langName = req.params.language || config.default_language;

  if (translate) {
    res.render("auth/register", { translate, langName, h: req.helper, old: req.session.old, errors: req.session.errors });
  }
});

const post = route.route("/:language?/register", async (req, res) => {
  const { sequelize } = require("../../../service/database/models/");
  const User = sequelize.models.User;
  const { username, password } = req.body;
  const langName = req.params.language || config.default_language;

  await User.create({ username, password }).catch((err) => {
    const error = err.errors[0].validatorKey;
    const msgError = require("../../../langue/errors.js")[langName].ORM[error];
    
    req.session.old = { username, password };
    req.session.errors = { error, msgError };
    res.redirect(`/${langName}/register`);
  });
});

module.exports = { get, post };
