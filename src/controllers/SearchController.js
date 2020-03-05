/*
Modulo para procurar entradas de equipamentos basedo no valor de num_serie_teste.
Possui retorno para verificar se encontrou ou não uma entrada no Banco de Dados
*/

const Equip = require('../models/Equipamento');

module.exports = {
    async index(request, response){                     
        const { user } = request.query; //escolher campo de pesquisa
        const equip = await Equip.findOne({user}); //escolher campo de pesquisa
        if(equip!=null){
            return response.json(equip);
            } else{
                return response.json({"message":"Não encontrado!"})
                };
    }
}