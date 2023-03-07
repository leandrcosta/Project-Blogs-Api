const { User } = require('../models');

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

module.exports = {
  getUsers,
};