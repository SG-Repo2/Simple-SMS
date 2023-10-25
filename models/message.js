

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

class Message extends Model {}

Message.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Company',
      key: 'id'
    }
  }
  //... any other fields you want ...
}, { sequelize, modelName: 'message' });

  return Message;
};