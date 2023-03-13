const express = require('express');
const { blogPostController } = require('../controllers');
const { validateToken } = require('../middleware/validationToken');

const blogPostRouter = express.Router();

blogPostRouter.get('/', validateToken, blogPostController.getAllBlogs);
blogPostRouter.get('/:id', validateToken, blogPostController.getById);

module.exports = blogPostRouter;