const { blogPostService } = require('../services');

const getAllBlogs = async (_req, res) => {
    const allBlogs = await blogPostService.getAllBlogPost();
    console.log(allBlogs);
    return res.status(200).json(allBlogs);
};

module.exports = { getAllBlogs };