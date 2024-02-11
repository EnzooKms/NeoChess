require("dotenv").config({ path: "./server/.env" });

module.exports = {
  /*************************************************************
   *
   * Application Name
   *
   *************************************************************/

  name: process.env.NAME || "NeoChess",

  /*************************************************************
   *
   * Application Url
   *
   *************************************************************/

  url:
    process.env.URL ||
    (() => {
      throw new Error(
        "URL : missing environment variable \n Put localhost or ipv4"
      );
    })(),

  /*************************************************************
   *
   * Application Port
   *
   *************************************************************/

  port: process.env.PORT || 5173,

  /*************************************************************
   *
   * Application Version
   *
   *************************************************************/

  version: process.env.VERSION || "1.0.0",

  /*************************************************************
   *
   * Application Asset Path
   *
   *************************************************************/

  dir_public_assets: "client/public",
  path_public_assets: "/resources/assets",

  /*************************************************************
   *
   * View engine
   *
   *************************************************************/

  path_views: "client/views",
  engine_views: "express-edge",
  /** Express can already use this engine */
  isAlreadyImplement: false,
};
