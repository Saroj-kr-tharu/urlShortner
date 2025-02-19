'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlDb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UrlDb.init({
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortUrl: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
     
    },
  }, {
    sequelize,
    modelName: 'UrlDb',
  });
  return UrlDb;
};