const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // defines the data type as an integer
      primaryKey: true, // sets to primary key
      allowNull: false, // null value not allowed
      autoIncrement: true // sets id to auto increment 
    },
    product_id: {
      type: DataTypes.INTEGER, // defines the data type as an integer
      references: { // References the Product model's id.
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER, // sets type to Integer 
      references: { // References the Tag model's id.
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
