// Requiring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var sequelize = require('sequelize');
var moment = require('moment');

// for file uploads
var fileUpload = require('express-fileupload');


var db = require('./models');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('./views'));

app.use(fileUpload());
// handling the upload
// getting the file from ifound.html
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/views', 'ifound.html'));
});

// placeholder for getting the file from ilost.html

app.post('/upload', function(req, res) {

});

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
