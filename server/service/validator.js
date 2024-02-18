/**
 * @typedef options
 * @property {boolean} isAlphanumeric
 * @property {number} min
 * @property {number} max
 */

class Validator {
  #errors;
  /**
   *
   * @param {string} field
   * @param {options} options
   */
  constructor(field, type, options) {
    this.field = field;
    this.options = options;
    this.type = type;
    this.#errors = [];
  }

  validate(sessionErr, langName) {
    for (const property in this.options) {
      const value = this.options[property];
      if (!value) continue;

      const isNotValid = !new Validate(this.field)[property](value);

      if (isNotValid) {
        this.#errors.push(property);
      }
    }

    sessionErr.errors[this.type] = {};
    for (const error of this.#errors) {
      const msgError = require("../langue/errors.js")[langName].ORM[error];
      sessionErr.errors[this.type][error] = msgError;
    }

    return this.#errors.length > 0;
  }
}

class Validate {
  constructor(field) {
    this.field = field;
  }

  isAlphanumeric() {
    const valid = this.field.match(/[A-Za-z0-9]+|_+|-+/gm);
    return valid?.join("") === this.field;
  }

  min(value) {
    const valid = this.field.length >= value;
    return valid;
  }

  max(value) {
    const valid = this.field.length <= value;
    return valid;
  }
}

module.exports = Validator;
