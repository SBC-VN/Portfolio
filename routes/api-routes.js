const mongoose = require("mongoose");
const contactItems = require("../model/contactModel.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Submit contact information
  app.post("/api/contact", function(req, res) {
    req.body.date = Date.now().toString();
    contactItems.create(req.body).then(function(dbItem) {
        res.json({status: "ok"});
      });  
  });
};