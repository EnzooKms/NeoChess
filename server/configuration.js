/*************************************************************
 *
 * Setup engine
 *
 *************************************************************/

if (config.isAlreadyImplement) {
  app.set("views", config.path_views);
  app.set("view engine", config.engine_views);
} else {
  const engine = require(config.engine_views);
  app.use(engine);
  app.set("views", config.path_views);
}
