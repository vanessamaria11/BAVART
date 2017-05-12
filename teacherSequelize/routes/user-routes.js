// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {


    // POST route for saving a new post
  app.post("/api/user", function(req, res) {

     var userCreate = req.body;
    db.User.create({
        firstName: userCreate.firstName,
        lastName: userCreate.lastName,
        userName: userCreate.userName,
        email: userCreate.email,
        password: userCreate.password
        // phoneNumber: userCreate.phoneNumber
    }).then(function(results) {
        // console.log(results);
      res.json(results);
    });
  });

    app.post("/api/login/tokenset", function(req, res) {
        db.User.update({token: req.body.token},
        {
            where: {
                userName: req.body.name
            }
        }).then(function (data) {
            res.redirect("/register");
        });

    });



 app.post("/api/login/update", function(req, res) {

     db.User.update({login: req.body.login},
          {
              where: {
                  userName: req.body.userName
              }
              
          }).then(function(data){
                  res.redirect("/register");
          });
        });

 app.get("/api/login:name", function(req, res) {

     db.User.findOne({
          where: {
              userName: req.params.name
          }
      }).then(function(results) {

         console.log(results);
          res.json(results);

     });

 });

}