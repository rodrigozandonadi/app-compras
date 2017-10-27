const express = require('express');
const path = require('path');
const consign = require('consign');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended:true}));
    app.use(bodyParser.json());
    app.use(multiparty());
        
    app.use(function(req, res, next){
    
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader("Access-Control-Allow-Credentials", true);
    
      next();
    });
  
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(express.static('./public'));

    consign()
      .include('app/models')
      .then('app/controllers')
      .then('app/routes')
      .into(app)
    ;

    return app;
}



