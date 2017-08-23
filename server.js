// Requiring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var inquirer = require('inquirer');
var path = require('path');
var sequelize = require('sequelize');
var db = require('./models/lostandfound');
var homeRouter = require('./controllers/home.js');
var app = express();
var port = process.env.PORT || 3000;

db.sequelize.sync().then(function(){
  app.listen(port, function(){
    console.log("Server listening on " + port);
});
app.set("views", __dirname + "/views");
app.engine("handlebars", exphbs({
  defaultLayout: 'main'
}));
app.set("view engine", "handlebars");
app.use(express.static('views'));

});
