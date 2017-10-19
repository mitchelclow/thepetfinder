var db = require("../models");
var path = require('path');
var mkdirp = require("mkdirp");
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'temp'});


// var authController = require('../controllers/authcontroller.js');
// db.UserLost.destroy({where: {}});
// Routes
module.exports = function (app) {

    // GET route for getting all of the found posts
    app.get("/api/userfounds", function (req, res) {
        // .UserFound. is variable from userfound model

        db.UserFound.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // GET route for getting all of the lost posts
    app.get("/api/userlosts", function (req, res) {
        // .UserLost. is variable from userlost model

        db.UserLost.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // POST route for saving a new post to the userfounds table
    app.post("/api/userfounds", upload.single('photoFound'), function (req, res, next) {
      var photo = req.file;
      console.log(photo);

       var file_name = '';

       var fileExtension = photo.originalname.split('.')[1];

       for(var index = 0; index < 25; index++)
       {
         file_name += String.fromCharCode(Math.floor((Math.random() * 25) + 65));
       }

       file_name += '.' + fileExtension;

       var image_url = path.join(__dirname, '../public/pets/' + file_name);

       fs.readFile(photo.path, function(err, photoData) {
         if (err) throw err;

         mkdirp(path.dirname(image_url), function() {
           // Save the image to the public/profiles directory using the data we got from the readFile as binary
           fs.writeFile(image_url, photoData, 'binary', function(err) {
              if (err) throw err;

              // Set the
              var data = req.body;
              data.photoFound = file_name;
              console.log(data);

              db.UserFound.create(data).then(function() {
                  res.redirect('/');
               });
           });
         });
       });
     });

    //POST route for saving a new post to the userlost table
    app.post("/api/userlosts", upload.single('photoLost'), function (req, res, next) {
      var photo = req.file;
      console.log(photo);

       var file_name = '';

       var fileExtension = photo.originalname.split('.')[1];

       for(var index = 0; index < 25; index++)
       {
         file_name += String.fromCharCode(Math.floor((Math.random() * 25) + 65));
       }

       file_name += '.' + fileExtension;

       var image_url = path.join(__dirname, '../public/pets/' + file_name);

       fs.readFile(photo.path, function(err, photoData) {
         if (err) throw err;

         mkdirp(path.dirname(image_url), function() {
           // Save the image to the public/profiles directory using the data we got from the readFile as binary
           fs.writeFile(image_url, photoData, 'binary', function(err) {
              if (err) throw err;

              // Set the
              var data = req.body;
              data.photoLost = file_name;
              console.log(data);

              db.UserLost.create(data).then(function() {
                  res.redirect('/');
               });
           });
         });
       });
     });
   }
