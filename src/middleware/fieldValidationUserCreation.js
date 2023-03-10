// validação do email /regex/
const { loginService } = require('../services'); // verifica email no banco de dados

const validatingEmail = (email) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return emailRegex.test(email);
};

const validateField = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  console.log(req.body);

  if (displayName.length < 8) {
   return res
   .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (!validatingEmail(email)) {
    return res
    .status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res
    .status(400).json({ message: '"password" length must be at least 6 characters long' });
  }
  // verifica se email ja estava cadastrado
  const userExist = await loginService.getUser(email);
  if (userExist) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = { validateField };