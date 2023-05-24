'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MachineInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, { through: 'Users_Machine' });
    }
  }
  MachineInventory.init({
    name: DataTypes.STRING,
    assetType: DataTypes.STRING,
    stockCount: DataTypes.INTEGER,
    //user: user.js
  }, {
    sequelize,
    modelName: 'MachineInventory',
  });
  return MachineInventory;
};