const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema ({
    //identificadores
    user: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String, required:true},
    setor: {type:String, required:true},
    admin: {type:Boolean, required:true},
});

module.exports = mongoose.model('usuariosCadastrados', CadastroSchema);