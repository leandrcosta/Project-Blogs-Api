"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  //sequelize.define(modelName, attributes, options)
  const CategoryModel = sequelize.define(
    'Category', // Nome da Model no singular
    {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
    },
    {
      tableName: "categories", // nome da migration
      underscored: true,
      timestamps: false,
    }
  );
  CategoryModel.associate = (models) => {// Estava esquecendo de fazer associação e dava erro
    CategoryModel.hasMany(models.PostCategory,{
      foreignKey:'categoryId',
      as: 'postCategory',
    })
  };
  return CategoryModel;
};
