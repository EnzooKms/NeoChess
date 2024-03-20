"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gameGameState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gameGameState.init(
    {
      gameId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      gameStateId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "gameGameState",
    }
  );
  return gameGameState;
};
