"use strict";
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  //sequelize.define(modelName, attributes, options)
  const PostCategoryModel = sequelize.define(
    "PostCategory", // Nome da Model no singular
    {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "post_id",
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "category_id",
      },
    },
    {
      tableName: "posts_categories", // nome da migration
      underscored: true,
      timestamps: false,
    }
  ); // Estudar mais sobre associações/ Tive problemas com os nomes e alias
  PostCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories", // apelido pra Model.Category
      through: PostCategoryModel, //nome da model que junta as duas tabelas
      foreignKey: "categoryId", // a coluna representada na tabela PostCategory
      otherKey: "postId", // a outra coluna representada na mesma tebale
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: "blogpost",
      through: PostCategoryModel,
      foreignKey: "postId", // a coluna representada na tabela PostCategory
      otherKey: "categoryId", // a outra coluna representada na mesma tebale
    });
  };
  return PostCategoryModel;
};
// Material base de estudo : Course//back-end//Node.js:ORM//Dia 03//Relacionamentos N:N
// Video aula do Mariotto
