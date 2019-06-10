// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // default route leads to handlebar profile page.
  app.get("/", function(req, res) {
    res.render("profile", {});
  });

  // profile route also leads to profile
  app.get("/profile", function(req, res) {
    res.render("profile", {});
  });
  

  // Each of the routes below this provide (private) items that the website needs
  // such as css, images, etc.

  // CSS file route
  app.get("/resources/css/:file", function(req, res) {
    // __dirname = ..\Portfolio\routes
    var reqfile = path.join(__dirname, "../resources/css/" + req.params.file);
    res.sendFile(reqfile);
  });

  // Image file route
  app.get("/resources/img/:file", function(req, res) {
    // __dirname = ..\Portfolio\routes
    var reqfile = path.join(__dirname, "../resources/img/" + req.params.file);
    res.sendFile(reqfile);
  });
};
