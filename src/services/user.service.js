const { User } = require('../models'); // model de User;

const createUser = async ({ displayName, email, password, image }) => { // campos obrigatórios
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
    // Quando eu não estava retornado os parametros recebidos, o obj estava chegando undefined
    // Após fazer o 'return' veio o obj como eu queria
};

const getAllUsers = async () => {
    const listUsers = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return listUsers;
};

module.exports = {
    createUser,
    getAllUsers,
};