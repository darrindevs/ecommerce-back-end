const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // defines the data type as an integer
      primaryKey: true, // sets id as primary key 
      allowNull: false, // null values not allowed 
      autoIncrement: true // sets id to auto increment 
    },
    tag_name: {
      type: DataTypes.STRING // defines the data type as string 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
