/*************************************************************
 *
 * Home router with get http verb
 *
 *************************************************************/

const Route = require("../route.js");
const route = new Route();

const get = route.route("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = { get };
