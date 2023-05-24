'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Machines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Machines.init({
    UserId: DataTypes.INTEGER,
    MachineInventoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Machines',
  });
  return Users_Machines;
};