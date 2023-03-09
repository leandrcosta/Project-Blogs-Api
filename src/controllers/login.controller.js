const { loginService } = require('../services');
const { createToken } = require('../helpers/authorizationToken');

const isBodyRequestValid = ({ email, password }) => email && password;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!isBodyRequestValid({ email, password })) { // validação dos campos
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await loginService.getUser(email, password);

  if (!user || user.password !== password) { // verificando se dados existem no banco
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);// gerando token

  return res.status(200).json({ token });
};
module.exports = { loginUser };