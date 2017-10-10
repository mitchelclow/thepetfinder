var authController = require('../views/js/authcontroller');

module.exports = function(app, passport) {


  // POST route for posting to a signup
  app.post('/api/users', function(req, res) {
    db.User.create(
      req.body
    )
    .then(function(dbPost) {
      res.redirect('../index.html');
    });
  });

};


// passport.authenticate('local-signup',

// app.post("/api/userfounds", function(req, res) {
//   console.log(req.body);
//   // create takes an argument describing the item we want to insert into userfounds table
//   db.UserFound.create(
//     req.body
//   )
//   .then(function(dbPost) {
//     res.redirect('../foundDisplay.html');
//   });
// });
