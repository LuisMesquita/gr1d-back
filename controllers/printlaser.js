var exports = module.exports = {}

//Credentias de autorização da PrintLaser
const key = ""
const baseUrl = "https://gateway.gr1d.io/sandbox/printlaser/email/v1"

var request = require("request");
      
const headers = {
    'X-Api-Key': key,	    
}

//Função responsável em conectar com a api da Mongeral, e pegar os disponíveis para o CNPJ
exports.sendEmail = async function(user, plans, goals) {	
    if (!user || !user.email || !user.name || !plans || !goals) 
        throw 'Campos inválidos'
   
    const body = [
        {
            "EmailDestinatario": user.email,
            "NomeDestinatario": user.name,
            "EmailRemetente": "email@email.com",
            "NomeRemetente": "Juni",
            "Assunto": "Proposta e objetivos de " + user.name,
            "Body": plans + goals,
            "Referencia": "Propposta"
          }
    ]
    
    // Configure the request
	var options = {
        url: baseUrl+'/email',        
        method: 'POST',
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
