const { Router } = require('express');

const routes = new Router();

routes.get('/main', (req, res) => {
    res.send({ message: 'Conectado com sucesso!' });
});

module.exports = routes;
