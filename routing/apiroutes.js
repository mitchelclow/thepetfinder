// Requiring userfound model
var db = require("../models");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
// var authController = require('../controllers/authcontroller.js');
// var passport = require('../config/passport/passport.js');
var upload = multer({ dest: path.join(__dirname, '/temp') });
// Routes
module.exports = function(app) {

  // GET route for getting all of the found posts
  app.get("/api/userfounds", function(req, res) {
    // .UserFound. is variable from userfound model
    db.UserFound.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // GET route for getting all of the lost posts
  app.get("/api/userlosts", function(req, res) {
    // .UserLost. is variable from userlost model
    db.UserLost.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post to the userfounds table
  app.post("/api/userfounds", function(req, res) {
    console.log(req.body);
    // create takes an argument describing the item we want to insert into userfounds table
    db.UserFound.create(
      req.body
    )
    .then(function(dbPost) {
      res.redirect('../foundDisplay.html');
    });
  });

  // POST route for saving a new post to the userlost table
  app.post("/api/userlosts", upload.single('missingPet'), function(req, res) {
    console.log(req.body);
    // create takes an argument describing the item we want to insert into userlosts table
    if(req.file)
    {
      fs.readFile(req.file.path, function read(err, data) {
  	    if (err)
        {
          res.status(400).send('Invalid or no image sent.');
        }
        req.body.photoLost = data;
        db.UserLost.create(
          req.body
        )
        .then(function(dbPost) {
          res.redirect('../lostDisplay.html');
        });
  		  });
    }
    else {
      res.status(400).send('Invalid or no image sent.');
    }
	});
};
