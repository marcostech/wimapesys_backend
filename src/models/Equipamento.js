const mongoose = require('mongoose');

const EquipamentosSchema = new mongoose.Schema ({
    //identificadores
    data: {type:String, required:true},
    resp_teste: {type:String, required:true},
    resp_aprov: {type:String, required:true},
    num_serie_teste: {type:String, required:true},
    num_serie_trafo: {type:String, required:true},
    modelo: {type:String, required:true},
    cod: {type:String, required:true},
    especial: {type:String, required:true},
    progam_ver: {type:String, required:true},    
    //conectores e mm dos cabos
    rede_cfg: [{type:String, required:true}], //index 0 = conectores, index 1 = mm do cabo
    bat_cfg: [{type:String, required:true}],   
    //teste dos componentes fisicos e observações
    teste1: [{type:String, required:true}], //index 0 = resultado, index 1 = observação
    teste2: [{type:String, required:true}],
    teste3: [{type:String, required:true}],
    teste4: [{type:String, required:true}],
    teste5: [{type:String, required:true}],
    teste6: [{type:String, required:true}],
    teste7: [{type:String, required:true}],
    teste8: [{type:String, required:true}],
    teste9: [{type:String, required:true}],
    teste10: [{type:String, required:true}],
    teste11: [{type:String, required:true}],
    teste12: [{type:String, required:true}],
    teste13: [{type:String, required:true}],
    teste14: [{type:String, required:true}],
    //teste funcional e observações
    teste_func1: [{type:String, required:true}],//index 0 = resultado, index 1 = observação
    teste_func2: [{type:String, required:true}],
    teste_func3: [{type:String, required:true}],
    teste_func4: [{type:String, required:true}],
    teste_func5: [{type:String, required:true}],
    teste_func6: [{type:String, required:true}],
    teste_func7: [{type:String, required:true}],
    teste_func8: [{type:String, required:true}],
    //teste do transformador
    //tape 1
    teste1_trafo_tp1: {type:String, required:true},
    teste2_trafo_tp1: {type:String, required:true},
    teste3_trafo_tp1: {type:String, required:true},
    teste4_trafo_tp1: {type:String, required:true},
    teste5_trafo_tp1: {type:String, required:true},
    //tape 2
    teste1_trafo_tp2: {type:String, required:true},
    teste2_trafo_tp2: {type:String, required:true},
    teste3_trafo_tp2: {type:String, required:true},
    teste4_trafo_tp2: {type:String, required:true},
    teste5_trafo_tp2: {type:String, required:true},

    temp_test: {type:String, required:true},
    bat_volt: {type:String, required:true},
    retifier: {type:String, required:true},        
    //boservações gerais finais
    obs_trafo: {type:String, required:true},
    obs_geral: {type:String, required:true},
    obs_aprov: {type:String, required:true},
});

module.exports = mongoose.model('equipamentosCadastrados', EquipamentosSchema);