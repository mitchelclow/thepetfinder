var authController = require('../controllers/authcontroller.js');

modules.exports = function(app, passport) {

  // GET routes for signup and signin
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);

  // POST route for posting to a signup
  app.post('/signup', passport.authenticate('local-signup', {
          successRedirect: '/dashboard',

          failureRedirect: '/signup'
      }

  ));

};
