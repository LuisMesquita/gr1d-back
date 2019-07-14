var exports = module.exports = {}

const User = require('../models/user');

//Função responsável em criar um usuário na db
exports.createUser = async function (user) {  
    const { email } = user
    
    if (!user.email)
        return res.status(400).send('Email should be provided');

    if (await User.findOne({ email }))
        return res.status(400).send('User already created');
                         
    const newUser = await User.create(user)		

    return newUser
}

//Função responsável em atualizar um usuário na db
exports.updateUser = async function (user) {  
    if (!user.email)
        return res.status(400).send('Email should be provided');
           
    const newUser = await User.findOneAndUpdate(filter, update, {
        new: true
    });	
    
    return newUser
}