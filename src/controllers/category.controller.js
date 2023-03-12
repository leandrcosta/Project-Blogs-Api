const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.create({ name });
  return res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = { createCategory, getAllCategories };
