/*************************************************************
 *
 * Auth/register router
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/register", (req, res) => {
  const translate = req.load("auth/register");
  const langName = req.params.language;

  if (translate) {
    res.render("auth/register", { translate, langName, h: req.helper });
  }
});

module.exports = { get };
