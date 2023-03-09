const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Batatinha';

const JWT_CONFIG = { // conf do jwt
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (data) => {
  const token = jwt.sign({ data }, secret, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };