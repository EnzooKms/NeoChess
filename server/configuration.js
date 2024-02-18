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

/*************************************************************
 *
 * Application Express Configuration
 *
 *************************************************************/

const express = require("express");
app.use(config.path_public_assets, express.static(config.dir_public_assets));
app.use(express.urlencoded({ extended: true }));

/*************************************************************
 *
 * Application Session Configuration
 *
 *************************************************************/

const session = require("express-session");
app.use(
  session({
    name: config.SESSION_NAME,
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
    },
  })
);
