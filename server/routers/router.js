const Middleware = require("../middlewares/handler.js");

class Router {
  constructor() {
    this.app = app;
  }

  /**
   *
   * @param {String} route
   * @param  {...middlewarePath} handler
   */

  route(route, ...handler) {
    /*************************************************************
     *
     * router variable
     *
     * ----------------------------------------------------------
     * Router is object of verbs http return 2 args
     * First args is the url path exemple "/users"
     * The last one is the express handler (req, res)
     * ----------------------------------------------------------
     *
     *************************************************************/
    const router = require(`./routes/${route}.js`);
    const instance = new Middleware();

    for (const path of handler) {
      instance.setMiddleware(path);
    }

    for (const method in router) {
      const [path, handler] = router[method]();
      const middlewares = instance.Middleware;
      app[method](path, ...middlewares, handler);
    }
  }
}

module.exports = Router;
