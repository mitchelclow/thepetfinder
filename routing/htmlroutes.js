// htmlroutes.js offers a set of routes for sending users to the correct pages
// Requiring an npm package
var path = require("path");


// Routes
module.exports = function(app) {
  // Loading signup.html
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);

  // Loading index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/index.html"));
  });

  // Loading foundDisplay.html
  app.get("/foundDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/foundDisplay.html"));
  });

  // Loading lostDisplay.html
  app.get("/lostDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "./../views/lostDisplay.html"));
  });
};
