// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var dbLost = require("./models/userlost");
var dbFound = require("./models/userfound")

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    dbLost.UserLost.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    dbLost.UserLost.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    dbLost.UserLost.create({
      namelost: req.body.namelost,
      petName: req.body.petName,
      emaillost: req.body.emailLost,
      phonelost: req.body.phoneLost,
      lastseenAddress: req.body.addressLost,
      typeofAnimal: req.body.typeLost,
      dateLost: req.body.dateLost,
      genderLost: req.body.genderLost,
      addlInfolost: req.body.commentLost
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
