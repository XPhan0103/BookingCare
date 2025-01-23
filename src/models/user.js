'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here //Dinh danh cac moi quan he
    }
  }
  User.init({
    // userID: DataType.INTEGER, //uuid 
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    roleID: DataTypes.STRING, //Admin, Doctor, Patient
    possitionID: DataTypes.STRING //Doctor, Professor
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};