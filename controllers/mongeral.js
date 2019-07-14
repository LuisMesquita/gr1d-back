var exports = module.exports = {}

const formater = require('../utils/formater.js')

//Credentias de autorização da Mongeral
const key = "3cd346aa-a061-4242-b249-08985f4ce862"
const cnpj = "11321351000110"
const baseUrl = "https://gateway.gr1d.io/sandbox/mongeral/v1"

var request = require("request");
    
const headers = {
    'X-Api-Key': key,	    
}
//Função responsável em conectar com a api da Mongeral, e pegar os produtos disponíveis para o CNPJ
exports.getPlanOptions = async function() {	
    var queryObject = {
        completo: true,
        canalVenda: 4,
        cnpj: cnpj
    }

	// Configure the request
	var options = {
        url: baseUrl+'/modeloproposta',
        qs: queryObject,
	    method: 'GET',
	    headers: headers,	    
	    json: true
	}

    // Start the request
    return new Promise(function(resolve, reject){
		request(options, function (error, response, body) {
		  	if (error) throw new Error(error);             
            resolve(body)
		});
	})
}


//Função responsável em conectar com a api da Mongeral, e pegar os produtos disponíveis para o cliente
exports.getPlanOptionsForUser = async function(user, periodacy) {	    
   if (!user || !user.nome || !user.dataNascimento || !user.cpf || !user.profissaoCbo || !user.renda || !user.uf || !user.sexoId || !periodacy) {        
    throw 'Campos inválidos'
   }
   
   //Create request body
    const simulacao = {
        proponente: {
            nome: user.nome,
            dataNascimento: formater.date(user.dataNascimento) ,
            cpf: user.cpf,
            profissaoCbo: user.profissaoCbo,
            renda: user.renda,
            uf: user.uf,
            sexoId: user.sexoId ? 1 : 0
        },
        periodicidadeCobrancaId: periodacy
    }

    const body = {
        'simulacoes': [
            simulacao
        ],        
    }

    //Create querystring
    var queryObject = {
        codigoModeloProposta: 'YZ',
        cnpj: cnpj
    }

    // Configure the request
	var options = {
        url: baseUrl+'/simulacao',        
        method: 'POST',
        qs: queryObject,
        body,
	    headers: headers,	    
	    json: true
	}
    
    // Start the request
    return new Promise(function(resolve, reject){
		request(options, function (error, response, body) {            
              if (error) throw new Error(error);                   
            resolve(body)
		});
	})
}