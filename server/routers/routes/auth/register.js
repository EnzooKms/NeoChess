/*************************************************************
 *
 * Auth/register router
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();
const validator = require("../../../service/validator.js");

const get = route.route("/:language?/register", (req, res) => {
  /*************************************************************
   *
   * Init session and translation
   *
   *************************************************************/

  const defaultSession = { username: [], password: [] };
  if (!req.session.errors) req.session.errors = defaultSession;
  const translate = req.load("auth/register");
  const langName = req.params.language || config.default_language;

  if (translate) {
    res.render("auth/register", { translate, langName, h: req.helper, old: req.session.old, errors: req.session.errors });
  }
});

const post = route.route("/:language?/register", async (req, res) => {
  /*************************************************************
   *
   * Init some variable
   *
   *************************************************************/

  const { sequelize } = require("../../../service/database/models/");
  const User = sequelize.models.User;
  const { username, password } = req.body;
  console.log(req.body);
  const langName = req.params.language || config.default_language;

  /*************************************************************
   *
   * Validator check
   *
   *************************************************************/

  req.session.errors = {};
  req.session.old = { username, password };
  const errorUsername = new validator(username, "username", { isAlphanumeric: true, min: 3, max: 20 }).validate(
    req.session,
    langName
  );
  const errorPassword = new validator(password, "password", { isAlphanumeric: true, min: 6, max: 40 }).validate(
    req.session,
    langName
  );
  if (errorUsername || errorPassword) {
    res.redirect(`/${langName}/register`);
    return;
  }

  /*************************************************************
   *
   * Create user if don't exist
   *
   *************************************************************/

  const [user, created] = await User.findOrCreate({ where: { username }, defaults: { username, password } });

  if (created) {
    res.redirect(`/${langName}/login`);
    return;
  }

  const error = "alreadyExist";
  const msgError = require("../../../langue/errors.js")[langName].ORM[error];
  req.session.errors.username = [msgError];
  console.log(req.session);
  res.redirect(`/${langName}/register`);
});

module.exports = { get, post };
