const { User } = require('../models');
// Busca pelo usuario onde o body.email === email
const getUser = (email, _password) => User.findOne({ where: { email } });

module.exports = {
  getUser,
};