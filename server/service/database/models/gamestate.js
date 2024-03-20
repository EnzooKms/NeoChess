"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gameState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gameState.belongsToMany(models.Game, { through: "GameGameState" });
    }
  }
  gameState.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      moveNumber: DataTypes.NUMBER,
      movement: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "gameState",
    }
  );
  return gameState;
};
