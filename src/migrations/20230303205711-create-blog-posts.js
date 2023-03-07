'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',{//cria a tabela
      id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING
      },
      content: {
        allowNull:false,
        type: Sequelize.STRING
      },
      user_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',// Quando atualizado,as linhas referente ao registro são alteradas
        onDelete: 'CASCADE',//Quando deletado, todas as linhas referente ao registro são auteradas
        references: {// o user_id vai receber "id" vindo da tabela "user"
          model: 'users',//model-migration que vai vir o "id"
          key: 'id'//coluna que faz a ligação/de onde vem o id
        },
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');//apaga a tabela
  }
};
