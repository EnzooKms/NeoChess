/*************************************************************
 *
 * Middleware Auth
 *
 * -----------------------------------
 * Implement Auth verification
 * -----------------------------------
 *
 *************************************************************/

const Middleware = require("../middleware.js");

module.exports = new Middleware().middleware((req, res, next) => {
  const langName = req.params.language || config.default_language;
  if (!req.session.user) {
    res.redirect(`/${langName}/register`);
    return;
  }
  next();
});
