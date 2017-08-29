// Requiring npm packages
var express = require('express');
var bodyParser = require('body-parser');
var inquirer = require('inquirer');
var path = require('path');
var sequelize = require('sequelize');
var moment = require('moment');

// for file uploads
var fileUpload = require('express-fileupload');
var s3 = require('s3')
var keys = require("./keys.js");

var db = require('./models');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('./views'));

var client = s3.createClient({
	maxAsyncS3: 20, // this is the default
	s3RetryCount: 3, // this is the default
	s3RetryDelay: 1000, // this is the default
	multipartUploadThreshold: 20971520, // this is the default (20 MB)
	multipartUploadSize: 15728640, // this is the default (15 MB)
	s3Options: {
		accessKeyId: keys.s3accesskey,
		secretAccessKey: keys.s3secretaccesskey,
// 		// any other options are passed to new AWS.S3()
// 		// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
	},
});

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
// db.sequelize.sync().then(function(){
//   require('./routing/apiroutes.js')(app, db);
//   app.listen(port, function(){
//     console.log("Server listening on " + port);
//   });
// });

//When deploying to heroku.  Until we get mysql working, comment above and uncomment below

app.listen(port, function(){
  console.log("Server listening on " + port);
});
