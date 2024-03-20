/*************************************************************
 *
 * New express app
 *
 *************************************************************/

const express = require("express");
globalThis.Console = require("./console.js");
globalThis.app = express();

/*************************************************************
 *
 * Import configuration
 *
 *************************************************************/

globalThis.config = require("./config.js");
require("./configuration.js");

/*************************************************************
 *
 * Run App
 *
 *************************************************************/

require("./middlewares/global.js");
require("./routers/routes.js");

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/key.pem"),
  cert: fs.readFileSync("ssl/cert.pem"),
};

const server = https
  .createServer(options, app)
  .listen(config.port, config.url, () => {
    /*************************************************************
     *
     * Clear console
     *
     *************************************************************/

    Console.load();
  });

/*************************************************************
 *
 * Socket runner
 *
 *************************************************************/
const runner = require("./service/socket.io/server.js");
runner(server);
