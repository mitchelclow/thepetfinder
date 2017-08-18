var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var homeRouter = require('./src/controllers/home.js');
var app = express();
var port = process.env.PORT || 3000
app.set("views", __dirname + "/src/views");
app.engine("handlebars", exphbs({
  defaultLayout: __dirname + "/src/views/layouts/main.handlebars"
}))
app.set("view engine", "handlebars");
app.use(homeRouter);
app.listen(port, function(){
  console.log("server listening on " + port);
})
