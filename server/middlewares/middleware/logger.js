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
  const logger = new Console.Event("Logger Middleware -- New connexion");
  logger.insertLine(`ip`, req.ip);
  logger.insertLine("url", req.originalUrl);
  logger.insertLine("auth", `${!!req.session?.user}`);
  logger.run();
  next();
});
