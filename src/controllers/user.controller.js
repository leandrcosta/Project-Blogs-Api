const { userService } = require('../services');
const { createToken } = require('../helpers/authorizationToken');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.createUser({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = newUser.dataValues; // não exib o password

  const token = createToken(userWithoutPassword); // criando o token ao cadastrar user
  
  return res.status(201).json({ token }); // retornando token ao invez de obj criado
};

const getAllUsers = async (_req, res) => {
  const listUsers = await userService.getAllUsers();
  return res.status(200).json(listUsers);
};

module.exports = {
  createUser,
  getAllUsers,
 };
