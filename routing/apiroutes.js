// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var uselost = require("./models");
var userfound = require("./models");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  console.log("apiroutes init");
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/thepetfinder", function(req, res) {
    res.json(thepetfinder);
  });

  app.post("/api/thepetfinder", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
  console.log("Yay!!!",req.body);
    var newFriend = req.body;

  });
}
// ------
