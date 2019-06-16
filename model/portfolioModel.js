const mongoose = require("mongoose");

// Mongoose schema object.
const Schema = mongoose.Schema;

// Define a schema to store portfolio information.
const PortfolioSchema = new Schema({
    sequence: {
        type: Number
    },
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
      },
    description: {
        type: String,
        trim: true,
        required: "Description is Required"
      },
    repolink: {
        type: String,
        trim: true,
        required: "RepoLink is Required"
      },
    sitelink: {
        type: String,
      },
    iconname: {
        type: String,
        trim: true,
        required: "Icon Name is Required"
      },
    techs : { type : Array , "default" : [] }
});

const PortfolioItems = mongoose.model("PortfolioItems", PortfolioSchema);

// Export the model
module.exports = PortfolioItems;