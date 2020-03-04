/*
Modulo para procurar entradas de equipamentos basedo no valor de num_serie_teste.
Possui retorno para verificar se encontrou ou não uma entrada no Banco de Dados
*/

const Mono = require('../models/Mono');

module.exports = {
    async index(request, response){                     
        const { user } = request.query; //num_serie_teste
        const mono = await Mono.findOne({user}); //num_serie_teste
        if(mono!=null){
            return response.json(mono);
            } else{
                return response.json({"message":"Não encontrado!"})
                };
    }
}