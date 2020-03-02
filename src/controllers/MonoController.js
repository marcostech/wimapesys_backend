const Mono = require('../models/Mono');
const parseStringAsArray = require('../utils/parseStringAsArray');
const mongoose = require('mongoose');

module.exports = {
    //chama todos os objetos gravados no BD
    async index(request, response) {
        const mono = await Mono.find();
        return response.json(mono);
    },
    
    async update(request, response) {
        //controlador para reescrever os dados do objeto já gravado no DB, controlador finalizado
        const newDataResults = request.body;
        const { num_serie_teste } = newDataResults; //valor a ser inserido na busca do BD
        let mono = await Mono.findOne({num_serie_teste});        
        if(!!mono){
            mono.data = newDataResults.data || mono.data; //operador ternario determina valor padrão
            mono.resp_teste = newDataResults.resp_teste || mono.resp_teste; 
            mono.resp_aprov = newDataResults.resp_aprov || mono.resp_aprov; 
            mono.num_serie_teste = newDataResults.num_serie_teste || mono.num_serie_teste; 
            mono.num_serie_trafo = newDataResults.num_serie_trafo || mono.num_serie_trafo; 
            mono.modelo = newDataResults.modelo || mono.modelo; 
            mono.cod = newDataResults.cod || mono.cod; 
            mono.especial = newDataResults.especial || mono.especial;
            mono.progam_ver = newDataResults.progam_ver || mono.progam_ver;
            
            mono.rede_cfg = [ newDataResults.rede_cfg[0] || mono.rede_cfg[0], newDataResults.rede_cfg[1] || mono.rede_cfg[1]];
            mono.bat_cfg = [ newDataResults.bat_cfg[0] || mono.bat_cfg[0], newDataResults.bat_cfg[1] || mono.bat_cfg[1]];           

            mono.teste1 = [ newDataResults.teste1[0] || mono.teste1[0], newDataResults.teste1[1] || mono.teste1[1] ];
            mono.teste2 = [ newDataResults.teste2[0] || mono.teste2[0], newDataResults.teste2[1] || mono.teste2[1] ];
            mono.teste3 = [ newDataResults.teste3[0] || mono.teste3[0], newDataResults.teste3[1] || mono.teste3[1] ];
            mono.teste4 = [ newDataResults.teste4[0] || mono.teste4[0], newDataResults.teste4[1] || mono.teste4[1] ];
            mono.teste5 = [ newDataResults.teste5[0] || mono.teste5[0], newDataResults.teste5[1] || mono.teste5[1] ];
            mono.teste6 = [ newDataResults.teste6[0] || mono.teste6[0], newDataResults.teste6[1] || mono.teste6[1] ];
            mono.teste7 = [ newDataResults.teste7[0] || mono.teste7[0], newDataResults.teste7[1] || mono.teste7[1] ];
            mono.teste8 = [ newDataResults.teste8[0] || mono.teste8[0], newDataResults.teste8[1] || mono.teste8[1] ];
            mono.teste9 = [ newDataResults.teste9[0] || mono.teste9[0], newDataResults.teste9[1] || mono.teste9[1] ];
            mono.teste10 = [ newDataResults.teste10[0] || mono.teste10[0], newDataResults.teste10[1] || mono.teste10[1] ];
            mono.teste11 = [ newDataResults.teste11[0] || mono.teste11[0], newDataResults.teste11[1] || mono.teste11[1] ];
            mono.teste12 = [ newDataResults.teste12[0] || mono.teste12[0],  newDataResults.teste12[1] || mono.teste12[1] ];
            mono.teste13 = [ newDataResults.teste13[0] || mono.teste13[0],  newDataResults.teste13[1] || mono.teste13[1] ];
            mono.teste14 = [ newDataResults.teste14[0] || mono.teste14[0],  newDataResults.teste14[1] || mono.teste14[1] ];

            mono.teste_func1 = [ newDataResults.teste_func1[0] || mono.teste_func1[0], newDataResults.teste_func1[1] || mono.teste_func1[1] ];
            mono.teste_func2 = [ newDataResults.teste_func2[0] || mono.teste_func2[0], newDataResults.teste_func2[1] || mono.teste_func2[1] ];
            mono.teste_func3 = [ newDataResults.teste_func3[0] || mono.teste_func3[0], newDataResults.teste_func3[1] || mono.teste_func3[1] ];
            mono.teste_func4 = [ newDataResults.teste_func4[0] || mono.teste_func4[0], newDataResults.teste_func4[1] || mono.teste_func4[1] ];
            mono.teste_func5 = [ newDataResults.teste_func5[0] || mono.teste_func5[0], newDataResults.teste_func5[1] || mono.teste_func5[1] ];
            mono.teste_func6 = [ newDataResults.teste_func6[0] || mono.teste_func6[0], newDataResults.teste_func6[1] || mono.teste_func6[1] ];
            mono.teste_func7 = [ newDataResults.teste_func7[0] || mono.teste_func7[0], newDataResults.teste_func7[1] || mono.teste_func7[1] ];
            mono.teste_func8 = [ newDataResults.teste_func8[0] || mono.teste_func8[0], newDataResults.teste_func8[1] || mono.teste_func8[1] ];

            mono.teste1_trafo_tp1 = newDataResults.teste1_trafo_tp1 || mono.teste1_trafo_tp1;
            mono.teste2_trafo_tp1 = newDataResults.teste2_trafo_tp1 || mono.teste2_trafo_tp1; 
            mono.teste3_trafo_tp1 = newDataResults.teste3_trafo_tp1 || mono.teste3_trafo_tp1; 
            mono.teste4_trafo_tp1 = newDataResults.teste4_trafo_tp1 || mono.teste4_trafo_tp1; 
            mono.teste5_trafo_tp1 = newDataResults.teste5_trafo_tp1 || mono.teste5_trafo_tp1; 

            mono.teste1_trafo_tp2 = newDataResults.teste1_trafo_tp2 || mono.teste1_trafo_tp2; 
            mono.teste2_trafo_tp2 = newDataResults.teste2_trafo_tp2 || mono.teste2_trafo_tp2; 
            mono.teste3_trafo_tp2 = newDataResults.teste3_trafo_tp2 || mono.teste3_trafo_tp2;
            mono.teste4_trafo_tp2 = newDataResults.teste4_trafo_tp2 || mono.teste4_trafo_tp2; 
            mono.teste5_trafo_tp2 = newDataResults.teste5_trafo_tp2 || mono.teste5_trafo_tp2;

            mono.temp_test = newDataResults.temp_test || mono.temp_test;
            mono.bat_volt = newDataResults.bat_volt || mono.bat_volt;
            mono.retifier = newDataResults.retifier || mono.retifier;

            mono.obs_trafo = newDataResults.obs_trafo || mono.obs_trafo;    
            mono.obs_geral = newDataResults.obs_geral || mono.obs_geral; 
            mono.obs_aprov = newDataResults.obs_aprov || mono.obs_aprov;    
        
        //função para salvar por cima de todas informações
        await mono.save ( function (err) {
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
        let mono = await Mono.findOne({num_serie_teste});        
        //se nulo roda o create senão retorna msg de duplicidade        
        if (!mono){ 
        //Salva todo o body na constante dataResults
        const dataResults = request.body;            
        //chama função mongoDB para criar objeto no banco de dados
        mono = await Mono.create ({
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
                    console.log({"mensagem": "Equipamento Mono Criado!"});                               
                    return response.json({"mensagem":"Criado com Sucesso!"});
                };
        });            
        } else{ 
            console.log({ "mensagem": "Equipamento Mono Já Existe, num_serie_teste já reservado!" })
            return response.json({"mensagem": "Cadastro já existente."});
        };
         
    },   

    async delete(request, response) {
        //pega um numero de serie e procura uma entrada igual no banco de dados, controlador finalizado
        const { num_serie_teste } = request.query;
        let monoFound = await Mono.find({num_serie_teste}); 
        //verifica se encontrou
        if(monoFound==false) {
            return response.json({"mensagem":"Equipamento Mono Com num_serie_teste informado não encontrado!"});
            }
        monoFound = await Mono.deleteOne({ num_serie_teste });        
        return response.json({"mensagem":`${monoFound.deletedCount} Equipamento Deletedo!`});        
    },
};
