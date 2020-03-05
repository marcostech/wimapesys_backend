/*
Modulo para procurar entradas de equipamentos basedo no valor de num_serie_teste.
Possui retorno para verificar se encontrou ou não uma entrada no Banco de Dados
*/

const Cadastro = require('../models/Cadastro');

module.exports = {
    async index(request, response){                     
        const { user } = request.query; //escolher campo de pesquisa
        const cadastro = await Cadastro.findOne({user}); //escolher campo de pesquisa
        if(cadastro!=null){
            return response.json(cadastro);
            } else{
                return response.json({"message":"Não encontrado!"})
                };
    }
}