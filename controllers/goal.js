var exports = module.exports = {}

const Goal = require('../models/goal');
const User = require('../models/user');

//Função responsável em criar um usuário na db
exports.createGoal = async function (goal, userId) {  
    let user = await User.findById(userId)
    .catch((err) => {
        throw err
    })
    
    const newGoal = await Goal.create({ ...goal, user })
    .catch((err) => {        
        throw err
    })	
    
    user.goals.push(newGoal)
    
    await user.save().catch((err) => {        
        throw err
    })
    
    return newGoal 
}