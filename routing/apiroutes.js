// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Routes
// =============================================================
module.exports = function(app, db) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.UserLost.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.UserLost.findOne({
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
    db.user_lost.create({
      // req.body
      nameLost: req.body.namelost,
      petName: req.body.petName,
      emailLost: req.body.emailLost,
      phoneLost: req.body.phoneLost,
      addressLost: req.body.addressLost,
      typeLost: req.body.typeLost,
      dateLost: req.body.dateLost,
      genderLost: req.body.genderLost,
      commentLost: req.body.commentLost
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
