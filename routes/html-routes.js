// Export routes for server.js to use.
var path = require("path");
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/startPage.html"));
  });

  app.get("/favicon.ico", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/images/favicon.ico/favicon.ico"));
  });

  app.get("/app", function(req, res) {
    db.User.findAll({}).then(function (data) {
      var hbsObject = {
          users: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    })
  });
  
  // app.get("/app", function(req, res) {
  //   res.render("map");
  // });

};
