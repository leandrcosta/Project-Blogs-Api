const express = require('express');
const { userController } = require('../controllers');
const { validateField } = require('../middleware/fieldValidationUserCreation');
const { validateToken } = require('../middleware/validationToken');

const userRouter = express.Router();

userRouter.post('/', validateField, userController.createUser);
userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;