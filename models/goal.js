
const mongoose = require('../database/index')

const GoalSchema = new mongoose.Schema({	
    user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true,	
    },
    nome: {
        type: String
    },
    objetivo: {
        type: Number,
    },
    arrecadado: {
        type: Number,
    },
    data: {
        type: Date
    },
    proposta: {
        type: String
    }
});

const Goal = mongoose.model('Goal', GoalSchema);
module.exports = Goal;