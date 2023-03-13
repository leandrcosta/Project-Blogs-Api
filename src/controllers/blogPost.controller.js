const { blogPostService } = require('../services');

const getAllBlogs = async (_req, res) => {
    const allBlogs = await blogPostService.getAllBlogPost();
    console.log(allBlogs);
    return res.status(200).json(allBlogs);
};
// Comecei aqui: Buscando Post por id
const getById = async (req, res) => {
    const { id } = req.params;
    const getPostId = await blogPostService.getPostById(id);
    if (!getPostId) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(getPostId);
};

module.exports = { getAllBlogs, getById };