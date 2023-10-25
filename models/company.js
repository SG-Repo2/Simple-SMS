
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
class Company extends Model {}
Company.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
  //... any other fields you want ...
}, { sequelize, modelName: 'company' });
  return Company;
};