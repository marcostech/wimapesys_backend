const Cadastro = require('../models/Cadastro');
const parseStringAsArray = require('../utils/parseStringAsArray');
const mongoose = require('mongoose');

module.exports = {
    //chama todos os objetos gravados no BD
    async index(request, response) {
        const cadastro = await Cadastro.find();
        return response.json(cadastro);
    },
    
    async update(request, response) {
        //controlador para reescrever os dados do objeto já gravado no DB, controlador finalizado
        const newDataResults = request.body;
        const { user } = newDataResults; // valor a ser inserido na busca do BD
        let cadastro = await Cadastro.findOne({user});        
        if(!!cadastro){

            cadastro.user = newDataResults.user || cadastro.user; //operador ternario determina valor padrão
            cadastro.password = newDataResults.password || cadastro.password; 
            cadastro.email = newDataResults.email || cadastro.email; 
            cadastro.setor = newDataResults.setor || cadastro.setor; 
            cadastro.admin = newDataResults.admin || cadastro.admin; 

        //função para salvar por cima de todas informações
        await cadastro.save ( function (err) {
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
        let { user } = request.body;
        let cadastro = await Cadastro.findOne({user});        
        //se nulo roda o create senão retorna msg de duplicidade        
        if (!cadastro){ 
        //Salva todo o body na constante dataResults
        const dataResults = request.body;            
        //chama função mongoDB para criar objeto no banco de dados
        cadastro = await Cadastro.create ({

            user: dataResults.user, //alterar todos os campos para criação
            password: dataResults.password, 
            email: dataResults.email, 
            setor: dataResults.setor, 
            admin: dataResults.admin,

        }, function (err) {
            if(err) {
                console.log(err.message);
                return response.json({"mensagem": `Erro Inesperado. ${err.message}`}) }
                else{ 
                    console.log({"mensagem": "Cadastro Criado!"});                               
                    return response.json({"mensagem":"Criado com Sucesso!"});
                };
        });            
        } else{ 
            console.log({ "mensagem": "Cadastro Já Existe, user já reservado!" })
            return response.json({"mensagem": "Cadastro já existente."});
        };
         
    },   

    async delete(request, response) {
        //pega um numero de serie e procura uma entrada igual no banco de dados, controlador finalizado
        const { user } = request.query;
        let cadastroFound = await Cadastro.find({user}); 
        //verifica se encontrou
        if(cadastroFound==false) {
            return response.json({"mensagem":"Cadastro com user informado não encontrado!"});
            }
        cadastroFound = await Cadastro.deleteOne({ user });        
        return response.json({"mensagem":`${cadastroFound.deletedCount} Cadastro Deletedo!`});        
    },
};
