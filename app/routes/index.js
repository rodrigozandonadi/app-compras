const app = require('express');

const controller = require('../controllers/index');

module.exports = (app) => {
    app.get('/cadastro', controller.cadastro);
    app.get('/listarCadastros', controller.listarCadastros);
    app.get('/listarCadastros/:id', controller.listarUmCadastro);
    app.post('/inserirCadastro', controller.inserirCadastro);
    app.put('/atualizarCadastro', controller.atualizarCadastro);
    app.delete('/deletarCadastros', controller.deletarCadastros);
}