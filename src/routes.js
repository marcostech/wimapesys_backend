const { Router } = require('express');
const SearchController = require('./controllers/SearchController');
const EquipamentoController = require('./controllers/EquipamentoController');
const CadastroController = require('./controllers/CadastroController');

const routes = Router();

//CRUD de Cadastro de Equipamentos
routes.post('/equip', EquipamentoController.create);
routes.delete('/equip', EquipamentoController.delete);
routes.get('/equip', EquipamentoController.index);
routes.put('/equip', EquipamentoController.update);
//CRUD de Cadastro de usuarios
routes.post('/cadastro', CadastroController.create);
routes.delete('/cadastro', CadastroController.delete);
routes.get('/cadastro', CadastroController.index);
routes.put('/cadastro', CadastroController.update);
//Search padrão
routes.get('/search', SearchController.index);

module.exports = routes;