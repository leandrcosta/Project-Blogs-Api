const { BlogPost, User, Category } = require('../models');

const getAllBlogPost = async () => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, // todos usuarios
      { model: Category, as: 'categories' }, // categorias gelacionadas ao usuario
    ],
  });
  return blogPost;
};
// Iniciei aqui: Buscar Post por id
const getPostById = async (id) => {
  const blogPostId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, // todos usuarios
      { model: Category, as: 'categories' }, // categorias gelacionadas ao usuario
    ],
  });
  return blogPostId;
};
module.exports = { getAllBlogPost, getPostById };