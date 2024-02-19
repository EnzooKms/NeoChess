/*************************************************************
 *
 * Middleware class
 *
 * -----------------------------------------------------------
 * This class
 *
 *************************************************************/

class Middleware {
  static globalMiddleware = [];
  constructor() {
    this.app = app;
    this.Middleware = [];
  }

  /**
   *
   * @param {Path} path
   */
  static setMiddleware(path) {
    const handler = require(`./middleware/${path}.js`);
    Middleware.globalMiddleware.push(handler);
  }

  /**
   *
   * @param {Path} path
   */
  setMiddleware(path) {
    const handler = require(`./middleware/${path}.js`);
    this.Middleware.push(handler()[1]);
  }

  /*************************************************************
   *
   * Register global Middleware
   *
   *************************************************************/
  static run() {
    for (const middleware of Middleware.globalMiddleware) {
      const [path, handler] = middleware();
      app.use(path, handler);
    }
  }
}

module.exports = Middleware;
