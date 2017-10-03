// Requiring models
var db = require("./../models");

// Routes
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/UserFound", function(req, res) {
    db.UserFound.findAll({
      where: {
        email: req.params.email
      }
    })
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
};
