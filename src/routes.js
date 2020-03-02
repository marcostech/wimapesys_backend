const { Router } = require('express');
const SearchController = require('./controllers/SearchController');
const Mono = require('./models/Mono');
const MonoController = require('./controllers/MonoController');


const routes = Router();

//routes.put('/devs', DevController.update);

//app luffe cadastro
routes.post('/monos', MonoController.create);
routes.delete('/monos', MonoController.delete);
routes.get('/monos', MonoController.index);
routes.put('/monos', MonoController.update);
routes.get('/search', SearchController.index);

module.exports = routes;