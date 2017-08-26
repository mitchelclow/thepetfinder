// Requiring npm packages
var express = require('express');
var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');
var inquirer = require('inquirer');
var path = require('path');
var sequelize = require('sequelize');
var db = require('./models');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.set("views", __dirname + "/views");
// app.engine("handlebars", exphbs({
//   defaultLayout: 'main'
// }));
// app.set("view engine", "handlebars");
app.use(express.static('./views'));

//When working on local machine, uncomment this and comment the stuff below

db.sequelize.sync().then(function(){
  require('./routing/apiroutes.js')(app, db);
  app.listen(port, function(){
    console.log("Server listening on " + port);
  });
});

//When deploying to heroku.  Until we get mysql working, comment above and uncomment below

// app.listen(port, function(){
//   console.log("Server listening on " + port);
// });
