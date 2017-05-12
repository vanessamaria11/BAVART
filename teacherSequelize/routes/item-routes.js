// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var fs = require('fs');
var multer = require('multer');

// Routes
// =============================================================

module.exports = function(app) {

	app.get("/auction/image", function(req, res){

		db.image.findAll({}).then(function(result){
			// console.log(result[0].image);
			var hbsObject = {
				image: result
			}
			// console.log(result[0].dataValues.image);
			res.json(result);
			// res.render("auction", hbsObject);

		});
	});

	app.get("/api/getprice:id", function(req, res){

		console.log(req.params.id);
  	db.image.findOne({
  		where: {
  			id: req.params.id
  		}
  	}).then(function(results) {

  		console.log(results.bidprice);
  		res.json(results);

  	});

	});

	app.get("/api/checklog:token", function(req, res) {
		db.User.findOne({
			where: {
				token: req.params.token
			}
		}).then(function(results) {
			// console.log(results.login);
  			res.json(results);
		})
	});


app.post("/api/bid", function(req, res){

        console.log(req.body.getToken);
        console.log(req.body.getToken);
        console.log(req.body.pictureNum);

        db.User.findOne({
          where: {
              token: req.body.getToken
          }
      }).then(function(result) {

         console.log(result.userName);


            db.image.update({bidprice: req.body.bidAmount, UserId: result.id}, 
            {
                where: {
                    id: req.body.pictureNum
                }
            }).then(function(results) {

            	console.log(results);
  //           		db.image.findAll({}).then(function(images) {
  //                 //  Promise.all(
  //                 // console.log (results.get({plain:true}));
  //                var imageArr=[];
  //                for(var i = 0; i< images.length; i++){
  //                	imageArr.push(images[i].get({plain:true}));
  //                }
		// 	// res.render("auction", {imageArr: imageArr})
		// })
                res.redirect("/auction");
            })

     });

    });

}