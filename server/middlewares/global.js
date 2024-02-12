const Middleware = require("./handler.js");

/*************************************************************
 *
 * Add Middleware
 *
 *************************************************************/

Middleware.setMiddleware("logger");
Middleware.setMiddleware("language");

/*************************************************************
 *
 * Run all global Middleware
 *
 * -------------------------
 * Do not delete this code        |
 * -------------------------
 *
 *************************************************************/

Middleware.run();
