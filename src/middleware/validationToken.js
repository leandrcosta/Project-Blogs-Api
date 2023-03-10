const { verifyToken } = require('../helpers/authorizationToken');
// Modelo de verificação passado na aula ao vivo pelo profº Zambelli
const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers; // pego o token que veio no autorization
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const payload = verifyToken(authorization);
    req.data = payload.data; // req transita por todas as rotas
    console.log(req.data);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };
