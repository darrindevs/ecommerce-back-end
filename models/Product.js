// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // defines the data type as an integer
      primaryKey: true, // defines the id as the primary key
      allowNull: false, // null value not allowed
      autoIncrement: true // sets the id to auto increment upon creation of a new record
    },
    product_name: {
      type: DataTypes.STRING, // defines the data type as a string 
      allowNull: false, // null value not allowed 
    },
    price: {
      type: DataTypes.DECIMAL, // defines the data type as a decimal
      allowNull: false, // null values not allowed 
      validate: {
        isDecimal: true // Validates that the value is a decimal.
      }
    },
    stock: {
      type: DataTypes.INTEGER, // defines the data type as an integer
      allowNull: false, // null value not allowed 
      defaultValue: 10, // set default value of the decimal to 10
      validate: {
        isNumeric: true //Validates that the value is numeric.
      }
    },
    category_id: {
      type: DataTypes.INTEGER, // defines the data type as an integer
      references: { // References the Category model's id. AKA Foreign Key
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
