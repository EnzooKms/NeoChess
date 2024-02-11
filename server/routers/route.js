class Route {
  constructor() {}

  /**
   *
   * @param {string} path
   * @param {import("express").RequestParamHandler} handler
   */
  route(path, handler) {
    return () => {
      return [path, handler];
    };
  }
}

module.exports = Route;
