"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  //sequelize.define(modelName, attributes, options)
  const BlogPostModel = sequelize.define(
    'BlogPost', // Nome da Model no singular
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'blog_posts', // nome da migration
      underscored: true,
      timestamps: false,
    }
  );
  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return BlogPostModel;
};
