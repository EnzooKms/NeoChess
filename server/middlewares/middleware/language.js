/*************************************************************
 *
 * Middleware Language
 *
 * -----------------------------------
 * Get the current translation
 * -----------------------------------
 *
 *************************************************************/

const Middleware = require("../middleware.js");

module.exports = new Middleware().middleware((req, res, next) => {
  function load(name) {
    const translate = require(`../../langue/${name}.js`);
    const language = req.params.language;
    let result;

    if (language) {
      result = translate[language];
    } else {
      result = translate[config.default_language];
    }

    if (!result) {
      res.redirect(`/${config.default_language}/${name}`);
    }

    return result;
  }

  req.load = load;
  next();
});
