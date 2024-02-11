/*************************************************************
 *
 * Auth/register router
 *
 *************************************************************/

const Route = require("../../route.js");
const route = new Route();

const get = route.route("/:language?/auth/register", (req, res) => {
  const translate = req.load("auth/register");
  const langName = req.params.language;
  const asset = `https://${config.url}:${config.port}${config.path_public_assets}`;

  if (translate) {
    res.render("auth.register", { translate, langName, asset });
  }
});

module.exports = { get };
