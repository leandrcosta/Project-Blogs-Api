const { User } = require('../models');
// Busca pelo usuario onde o body.email === email
const getUser = (email) => User.findOne({ where: { email } });

module.exports = {
  getUser,
};