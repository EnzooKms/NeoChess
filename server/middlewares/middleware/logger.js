/*************************************************************
 *
 * Middleware Logger
 *
 * -----------------------------------
 * Get Some information from req
 * -----------------------------------
 *
 *************************************************************/

const Middleware = require("../middleware.js");

module.exports = new Middleware().middleware((req, res, next) => {
  console.log(true);
  next();
});

