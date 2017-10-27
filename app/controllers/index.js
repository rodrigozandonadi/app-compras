const mongoose = require('mongoose');

const db = require('../models/index');
const controller = db.Mongoose.model('registros', db.Registros, 'registros');

mongoose.connect(db.URI, { useMongoClient: true });

module.exports.apihome = (req, res) => {
    res.send('Bem vindo à api');
}

module.exports.cadastro = (req, res) => {
    res.render('cadastro', { title: 'Cadastro de cupons'});
}


module.exports.listarCadastros = (req, res) => {    
    controller.find({}).lean().exec(
        (e, docs) => {
            console.log('Listagem feita');
            console.log(docs);
            res.json(docs);
            res.end();
        }
    );

}

module.exports.listarUmCadastro = (req, res) => {
    controller.find({ _id: req.params.id }).lean().exec(
        (e, docs) => {
            console.log('Listagem feita');
            console.log(docs);
            res.json(docs);
            res.end();
        }
    );
}

module.exports.inserirCadastro = (req, res) => {
    const controller = db.Mongoose.model('registros', db.Registros, 'registros');

    const data = req.body.data;
    const valor = req.body.valorTotal;

    const registro = new controller({
        data: data,
        valorTotal: valor
    });

    registro.save((err) => {
        if(err){
            console.log("Véi... deu ruim!!! Óia só: " + err.message);
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }        
        console.log('Tá chegando? Se chegar aqui deu certo, senão ferrou tudo!');
        //res.json(NovoUsuario);
        console.log(registro)
        res.end();
        console.log('Usuário Salvo no banco de dados');
    });

    res.redirect('/listarCadastros/');  
}

module.exports.atualizarCadastro = (req, res) => {
    controller.update(id, req.body).exec()
    .then(
        (e, docs) => {
            if (e) {
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            console.log(docs);
            res.end();
        }
    )
}

module.exports.deletarCadastros = (req, res) => {
    
}