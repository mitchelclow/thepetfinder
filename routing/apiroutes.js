// Requiring userfound model
var db = require("../models");
var authController = require('../views/js/authcontroller.js');
var passport = require('../config/passport/passport.js');

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
  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);


    // app.post('/signup', passport.authenticate('local-signup', {
    //         successRedirect: '/dashboard',
    //
    //         failureRedirect: '/signup'
    //     }

    // ));
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
  app.post("/api/userlosts", function(req, res) {
    console.log(req.body);
    // create takes an argument describing the item we want to insert into userlosts table
    db.UserLost.create(
      req.body
    )
    .then(function(dbPost) {
      res.redirect('../lostDisplay.html');
    });
  });
};
