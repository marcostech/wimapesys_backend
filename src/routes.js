const { Router } = require('express');
const EquipamentoSearchController = require('./controllers/EquipamentoSearchController');
const CadastroSearchController = require('./controllers/CadastroSearchController');
const EquipamentoController = require('./controllers/EquipamentoController');
const CadastroController = require('./controllers/CadastroController');

const routes = Router();

//CRUD de Cadastro de Equipamentos
routes.post('/equip', EquipamentoController.create);
routes.delete('/equip', EquipamentoController.delete);
routes.get('/equip', EquipamentoController.index);
routes.put('/equip', EquipamentoController.update);
//Search equip
routes.get('/equip/search', EquipamentoSearchController.index);

//CRUD de Cadastro de usuarios
routes.post('/cadastro', CadastroController.create);
routes.delete('/cadastro', CadastroController.delete);
routes.get('/cadastro', CadastroController.index);
routes.put('/cadastro', CadastroController.update);
//Search users
routes.get('/cadastro/search', CadastroSearchController.index);


module.exports = routes;