
const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
		unique: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,		
		select: false,
		require: true		
	},
	nome: {
		type: String,		
    },
    cpf: {
        type: String,
        unique: true,
		lowercase: true,
		trim: true,
    },
    dataNascimento: {
        type: Date,
    },
    profissaoCbo: {
        type: String,
    },
    renda: {
        type: Number,
    },
    uf: {
        type: String,
    },
    patrimonio: {
        type: Number,
    },
    sexoId: {
        type: Boolean,
    },
    goals: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Goal',
		require: true,	
	}]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;