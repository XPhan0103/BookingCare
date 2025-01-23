'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here //Dinh danh cac moi quan he
        }
    }
    History.init({
        patientID: DataTypes.INTEGER,
        doctorID: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        files: DataTypes.TEXT

        // don thuoc, file hinh anh, ...
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};