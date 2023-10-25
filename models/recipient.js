

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
class Recipient extends Model {}

Recipient.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Company',
      key: 'id'
    }
  }
  //... any other fields you want ...
}, { sequelize, modelName: 'recipient' });

  return Recipient;
};