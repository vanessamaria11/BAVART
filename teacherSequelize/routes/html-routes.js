var path = require("path");
var db = require("../models");
var multer  = require('multer')
// var upload = multer({ dest: './public/uploads/' });
// var fs = require("fs");
// var basename  = path.basename(module.filename);
// var db = require("../models");

module.exports = function(app) {

	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads view.html

app.get("/", function(req, res){(

	db.image.findAll({}).then(function(images) {
                  //  Promise.all(
                  // console.log (results.get({plain:true}));
                 var imageArr=[];
                 for(var i = 0; i< images.length; i++){
                 	imageArr.push(images[i].get({plain:true}));
                 }
			res.render("index")
		})

)});

app.get("/auction", function(req, res){(

	db.image.findAll({ include: [db.User] }).then(function(images) {
                  //  Promise.all(
                  // console.log (results.get({plain:true}));
                 var imageArr=[];
                 for(var i = 0; i< images.length; i++){
                 	imageArr.push(images[i].get({plain:true}));
                 }
			res.render("auction", {imageArr: imageArr})
		})

)});

  app.get("/register", function(req, res) {

  	res.render("register");

});

  app.get("/auction", function(req, res) {


  	res.render("auction");

});

  app.get("/home", function(req, res) {

  	res.render("home");

});

}