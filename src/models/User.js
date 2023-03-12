"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  //sequelize.define(modelName, attributes, options)
  const UserModel = sequelize.define(
    'User',
    {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );
  UserModel.associate = (models) => {
    UserModel.hasMany(models.BlogPost, {
      foreignKey: 'postId',
      as: 'blopPost',
    });
  };
  return UserModel;
};
