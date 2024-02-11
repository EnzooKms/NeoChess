class Middleware {
  constructor(path = "/") {
    this.path = path;
  }

  /**
   *
   * @param {string} path
   * @param {import("express").RequestParamHandler} handler
   */
  middleware(handler) {
    return () => {
      return [this.path, handler];
    };
  }
}

module.exports = Middleware;
