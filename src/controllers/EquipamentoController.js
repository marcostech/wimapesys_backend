const Equip = require('../models/Equipamento');
const parseStringAsArray = require('../utils/parseStringAsArray');
const mongoose = require('mongoose');

module.exports = {
    //chama todos os objetos gravados no BD
    async index(request, response) {
        const equip = await Equipamento.find();
        return response.json(equip);
    },
    
    async update(request, response) {
        //controlador para reescrever os dados do objeto já gravado no DB, controlador finalizado
        const newDataResults = request.body;
        const { num_serie_teste } = newDataResults; //valor a ser inserido na busca do BD
        let equip = await Equip.findOne({num_serie_teste});        
        if(!!equip){
            equip.data = newDataResults.data || equip.data; //operador ternario determina valor padrão
            equip.resp_teste = newDataResults.resp_teste || equip.resp_teste; 
            equip.resp_aprov = newDataResults.resp_aprov || equip.resp_aprov; 
            equip.num_serie_teste = newDataResults.num_serie_teste || equip.num_serie_teste; 
            equip.num_serie_trafo = newDataResults.num_serie_trafo || equip.num_serie_trafo; 
            equip.modelo = newDataResults.modelo || equip.modelo; 
            equip.cod = newDataResults.cod || equip.cod; 
            equip.especial = newDataResults.especial || equip.especial;
            equip.progam_ver = newDataResults.progam_ver || equip.progam_ver;
            
            equip.rede_cfg = [ newDataResults.rede_cfg[0] || equip.rede_cfg[0], newDataResults.rede_cfg[1] || equip.rede_cfg[1]];
            equip.bat_cfg = [ newDataResults.bat_cfg[0] || equip.bat_cfg[0], newDataResults.bat_cfg[1] || equip.bat_cfg[1]];           

            equip.teste1 = [ newDataResults.teste1[0] || equip.teste1[0], newDataResults.teste1[1] || equip.teste1[1] ];
            equip.teste2 = [ newDataResults.teste2[0] || equip.teste2[0], newDataResults.teste2[1] || equip.teste2[1] ];
            equip.teste3 = [ newDataResults.teste3[0] || equip.teste3[0], newDataResults.teste3[1] || equip.teste3[1] ];
            equip.teste4 = [ newDataResults.teste4[0] || equip.teste4[0], newDataResults.teste4[1] || equip.teste4[1] ];
            equip.teste5 = [ newDataResults.teste5[0] || equip.teste5[0], newDataResults.teste5[1] || equip.teste5[1] ];
            equip.teste6 = [ newDataResults.teste6[0] || equip.teste6[0], newDataResults.teste6[1] || equip.teste6[1] ];
            equip.teste7 = [ newDataResults.teste7[0] || equip.teste7[0], newDataResults.teste7[1] || equip.teste7[1] ];
            equip.teste8 = [ newDataResults.teste8[0] || equip.teste8[0], newDataResults.teste8[1] || equip.teste8[1] ];
            equip.teste9 = [ newDataResults.teste9[0] || equip.teste9[0], newDataResults.teste9[1] || equip.teste9[1] ];
            equip.teste10 = [ newDataResults.teste10[0] || equip.teste10[0], newDataResults.teste10[1] || equip.teste10[1] ];
            equip.teste11 = [ newDataResults.teste11[0] || equip.teste11[0], newDataResults.teste11[1] || equip.teste11[1] ];
            equip.teste12 = [ newDataResults.teste12[0] || equip.teste12[0],  newDataResults.teste12[1] || equip.teste12[1] ];
            equip.teste13 = [ newDataResults.teste13[0] || equip.teste13[0],  newDataResults.teste13[1] || equip.teste13[1] ];
            equip.teste14 = [ newDataResults.teste14[0] || equip.teste14[0],  newDataResults.teste14[1] || equip.teste14[1] ];

            equip.teste_func1 = [ newDataResults.teste_func1[0] || equip.teste_func1[0], newDataResults.teste_func1[1] || equip.teste_func1[1] ];
            equip.teste_func2 = [ newDataResults.teste_func2[0] || equip.teste_func2[0], newDataResults.teste_func2[1] || equip.teste_func2[1] ];
            equip.teste_func3 = [ newDataResults.teste_func3[0] || equip.teste_func3[0], newDataResults.teste_func3[1] || equip.teste_func3[1] ];
            equip.teste_func4 = [ newDataResults.teste_func4[0] || equip.teste_func4[0], newDataResults.teste_func4[1] || equip.teste_func4[1] ];
            equip.teste_func5 = [ newDataResults.teste_func5[0] || equip.teste_func5[0], newDataResults.teste_func5[1] || equip.teste_func5[1] ];
            equip.teste_func6 = [ newDataResults.teste_func6[0] || equip.teste_func6[0], newDataResults.teste_func6[1] || equip.teste_func6[1] ];
            equip.teste_func7 = [ newDataResults.teste_func7[0] || equip.teste_func7[0], newDataResults.teste_func7[1] || equip.teste_func7[1] ];
            equip.teste_func8 = [ newDataResults.teste_func8[0] || equip.teste_func8[0], newDataResults.teste_func8[1] || equip.teste_func8[1] ];

            equip.teste1_trafo_tp1 = newDataResults.teste1_trafo_tp1 || equip.teste1_trafo_tp1;
            equip.teste2_trafo_tp1 = newDataResults.teste2_trafo_tp1 || equip.teste2_trafo_tp1; 
            equip.teste3_trafo_tp1 = newDataResults.teste3_trafo_tp1 || equip.teste3_trafo_tp1; 
            equip.teste4_trafo_tp1 = newDataResults.teste4_trafo_tp1 || equip.teste4_trafo_tp1; 
            equip.teste5_trafo_tp1 = newDataResults.teste5_trafo_tp1 || equip.teste5_trafo_tp1; 

            equip.teste1_trafo_tp2 = newDataResults.teste1_trafo_tp2 || equip.teste1_trafo_tp2; 
            equip.teste2_trafo_tp2 = newDataResults.teste2_trafo_tp2 || equip.teste2_trafo_tp2; 
            equip.teste3_trafo_tp2 = newDataResults.teste3_trafo_tp2 || equip.teste3_trafo_tp2;
            equip.teste4_trafo_tp2 = newDataResults.teste4_trafo_tp2 || equip.teste4_trafo_tp2; 
            equip.teste5_trafo_tp2 = newDataResults.teste5_trafo_tp2 || equip.teste5_trafo_tp2;

            equip.temp_test = newDataResults.temp_test || equip.temp_test;
            equip.bat_volt = newDataResults.bat_volt || equip.bat_volt;
            equip.retifier = newDataResults.retifier || equip.retifier;

            equip.obs_trafo = newDataResults.obs_trafo || equip.obs_trafo;    
            equip.obs_geral = newDataResults.obs_geral || equip.obs_geral; 
            equip.obs_aprov = newDataResults.obs_aprov || equip.obs_aprov;    
        
        //função para salvar por cima de todas informações
        await equip.save ( function (err) {
             if(err){
                 return response.json({"mensagem": `Erro Inesperado!${err.message}`});
                } else {
                    return response.json({"mensagem": "Atualizado com Sucesso!"});                    
                 } 
            });        
        } else { return response.json({"mensagem": "Cadastro não encontrado!"}); }
    },

    async create(request, response) {        
        //cria uma nova entrada no BD com restrições
        //verificador de duplicidade, erros implementados, controlador finalizado
        let { num_serie_teste } = request.body;
        let equip = await Equip.findOne({num_serie_teste});        
        //se nulo roda o create senão retorna msg de duplicidade        
        if (!equip){ 
        //Salva todo o body na constante dataResults
        const dataResults = request.body;            
        //chama função mongoDB para criar objeto no banco de dados
        equip = await Equip.create ({
            data: dataResults.data, 
            resp_teste: dataResults.resp_teste, 
            resp_aprov: dataResults.resp_aprov, 
            num_serie_teste: dataResults.num_serie_teste, 
            num_serie_trafo: dataResults.num_serie_trafo, 
            modelo: dataResults.modelo, 
            cod: dataResults.cod, 
            especial: dataResults.especial, 
            progam_ver: dataResults.progam_ver, 
        
            rede_cfg: [ dataResults.rede_cfg[0], dataResults.rede_cfg[1] ],
            bat_cfg: [ dataResults.bat_cfg[0], dataResults.bat_cfg[1] ],              

            teste1: [ dataResults.teste1[0], dataResults.teste1[1] ],
            teste2: [ dataResults.teste2[0], dataResults.teste2[1] ],
            teste3: [ dataResults.teste3[0], dataResults.teste3[1] ],
            teste4: [ dataResults.teste4[0], dataResults.teste4[1] ],
            teste5: [ dataResults.teste5[0], dataResults.teste5[1] ],
            teste6: [ dataResults.teste6[0], dataResults.teste6[1] ],
            teste7: [ dataResults.teste7[0], dataResults.teste7[1] ],
            teste8: [ dataResults.teste8[0], dataResults.teste8[1] ],
            teste9: [ dataResults.teste9[0], dataResults.teste9[1] ],
            teste10: [ dataResults.teste10[0], dataResults.teste10[1] ],
            teste11: [ dataResults.teste11[0], dataResults.teste11[1] ],
            teste12: [ dataResults.teste12[0],  dataResults.teste12[1] ],
            teste13: [ dataResults.teste13[0],  dataResults.teste13[1] ],
            teste14: [ dataResults.teste14[0],  dataResults.teste14[1] ],

            teste_func1: [ dataResults.teste_func1[0], dataResults.teste_func1[1] ],
            teste_func2: [ dataResults.teste_func2[0], dataResults.teste_func2[1] ],
            teste_func3: [ dataResults.teste_func3[0], dataResults.teste_func3[1] ],
            teste_func4: [ dataResults.teste_func4[0], dataResults.teste_func4[1] ],
            teste_func5: [ dataResults.teste_func5[0], dataResults.teste_func5[1] ],
            teste_func6: [ dataResults.teste_func6[0], dataResults.teste_func6[1] ],
            teste_func7: [ dataResults.teste_func7[0], dataResults.teste_func7[1] ],
            teste_func8: [ dataResults.teste_func8[0], dataResults.teste_func8[1] ],
        
            teste1_trafo_tp1: dataResults.teste1_trafo_tp1, 
            teste2_trafo_tp1: dataResults.teste2_trafo_tp1, 
            teste3_trafo_tp1: dataResults.teste3_trafo_tp1, 
            teste4_trafo_tp1: dataResults.teste4_trafo_tp1, 
            teste5_trafo_tp1: dataResults.teste5_trafo_tp1, 

            teste1_trafo_tp2: dataResults.teste1_trafo_tp2, 
            teste2_trafo_tp2: dataResults.teste2_trafo_tp2, 
            teste3_trafo_tp2: dataResults.teste3_trafo_tp2,
            teste4_trafo_tp2: dataResults.teste4_trafo_tp2, 
            teste5_trafo_tp2: dataResults.teste5_trafo_tp2,

            temp_test: dataResults.temp_test, 
            bat_volt: dataResults.bat_volt, 
            retifier: dataResults.retifier,

            obs_trafo: dataResults.obs_trafo,    
            obs_geral: dataResults.obs_geral, 
            obs_aprov: dataResults.obs_aprov, 
            
        }, function (err) {
            if(err) {
                console.log(err.message);
                return response.json({"mensagem": `Erro Inesperado. ${err.message}`}) }
                else{ 
                    console.log({"mensagem": "Equipamento Equip Criado!"});                               
                    return response.json({"mensagem":"Criado com Sucesso!"});
                };
        });            
        } else{ 
            console.log({ "mensagem": "Equipamento Equip Já Existe, num_serie_teste já reservado!" })
            return response.json({"mensagem": "Cadastro já existente."});
        };
         
    },   

    async delete(request, response) {
        //pega um numero de serie e procura uma entrada igual no banco de dados, controlador finalizado
        const { num_serie_teste } = request.query;
        let equipFound = await Equip.find({num_serie_teste});  //valor a ser inserido na busca do BD
        //verifica se encontrou
        if(equipFound==false) {
            return response.json({"mensagem":"Equipamento Equip Com num_serie_teste informado não encontrado!"});
            }
        equipFound = await Equip.deleteOne({ num_serie_teste });        
        return response.json({"mensagem":`${equipFound.deletedCount} Equipamento Deletedo!`});        
    },
};
