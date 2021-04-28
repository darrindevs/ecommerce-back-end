const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //* defines the data type as an integer
      allowNull: false, //* Null value not allowed
      primaryKey: true, //* defines the id as the primary key in the table
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING, //* defines the data type as a string
      allowNull: false //* Null value not allowed
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
