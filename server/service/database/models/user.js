"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          min: 3,
          max: 20,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 6,
          max: 40,
          isAlphanumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};