'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlRanges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UrlRanges.init({
    start: DataTypes.NUMBER,
    end: DataTypes.NUMBER,
    current: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UrlRanges',
  });
  return UrlRanges;
};