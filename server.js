// Requiring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var inquirer = require('inquirer');
var path = require('path');

var homeRouter = require('./controllers/home.js');
var app = express();
var port = process.env.PORT || 3000
app.set("views", __dirname + "/views");
app.engine("handlebars", exphbs({
  defaultLayout: 'main'
}));
app.set("view engine", "handlebars");
app.use(express.static('views'));
// app.use(homeRouter);
app.listen(port, function(){
  console.log("server listening on " + port);
})
