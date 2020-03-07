// Export routes for server.js to use.
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/startPage.html"));
  // });

  app.get("/favicon.ico", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/images/favicon.ico/favicon.ico"));
  });

  app.get("/", function(req, res) {
    res.render("index");
  });
  
  // app.get("/app", function(req, res) {
  //   res.render("map");
  // });

};
