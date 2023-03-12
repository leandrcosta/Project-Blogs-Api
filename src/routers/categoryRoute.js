const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken } = require('../middleware/validationToken');
const { fieldValidateCategory } = require('../middleware/fieldValidationCategory');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken,
fieldValidateCategory,
categoryController.createCategory);

module.exports = categoryRouter;