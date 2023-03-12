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
module.exports = { getAllBlogPost };