const { Category } = require('../models');

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { create, getAllCategories };
