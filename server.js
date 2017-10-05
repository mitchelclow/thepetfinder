// Requiring npm packages
var express = require('express');
var db = require('./models');
var bodyParser = require('body-parser');
var path = require('path');
var sequelize = require('sequelize');
var moment = require('moment');
var fileUpload = require('express-fileupload');
// Packages needed to handle authentication
var passport = require('passport');
var session = require('express-session')


var port = process.env.PORT || 8080;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('./views'));

// Initialzing passport and the express-session and add them as middleware
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

app.use(fileUpload());
// handling the upload
// getting the file from ifound.html
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/views', 'ifound.html'));
});

// placeholder for getting the file from ilost.html

app.post('/upload', function(req, res) {

});

// Development
// The sequelize property on db is the connection to the db
// The sync method that creates tables from the models
db.sequelize.sync().then(function(){
  require('./routing/apiroutes.js')(app, db);
 // After synching, the express server starts
  app.listen(port, function(){
    console.log("Server listening on " + port);
  });
});
