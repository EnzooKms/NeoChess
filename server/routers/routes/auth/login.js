/*************************************************************
 *
 * Auth/login router
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/login", (req, res) => {
  const translate = req.load("auth/login");
  const langName = req.params.language;

  if (translate) {
    res.render("auth/login", { translate, langName, h: req.helper });
  }
});

module.exports = { get };
