/*************************************************************
 *
 * Home router with get http verb
 *
 *************************************************************/

const Route = require("../route.js");
const route = new Route();

const get = route.route("/", (req, res) => {
  const translate = req.load("home");
  const langName = req.params.language || config.default_language;

  if (translate) {
    res.render("home", { translate, langName, h: req.helper });
  }
});

module.exports = { get };
