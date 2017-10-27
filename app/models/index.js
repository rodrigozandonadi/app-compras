const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URI = 'mongodb://rodzan:Seilad12@ds237855.mlab.com:37855/cartaocarrefour';

mongoose.connection.on('connected', function () {  
    console.log('Mogoose conectado!!! Upa Lelê!!! Power Rangers Go Here =>> ' + URI);
});

mongoose.connection.on('error',function (err) {  
    console.log('Ai, ai, ai, ai, ai... deu erro aki sô: ' + err);
});

mongoose.connection.on('disconnected', function () {  
    console.log('Atenção: Mongoose desconectado" :O');
});

mongoose.connection.on('open', function () {  
    console.log("Conexão com o  Mongoose aberta! Let's Go Kamen Riders!!! o/");
});

process.on('SIGINT', function() {  
    mongoose.connection.close(function () {
      console.log('Fim da aplicação - Mongoose desconectado');
      process.exit(0);
    });
  });

const registros = new Schema(
    {
        data: Date,
        valorTotal: Number
    }, { collection: 'registros' }
);

module.exports = { Mongoose: mongoose, Registros: registros, URI }
