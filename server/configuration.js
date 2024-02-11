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

/*************************************************************
 *
 * Application Cross Origin Resources shared (cors)
 *
 *************************************************************/

const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

/*************************************************************
 *
 * Application Header
 *
 *************************************************************/

const helmet = require("helmet");
const compression = require("compression");
app.use(helmet());
app.use(compression());
