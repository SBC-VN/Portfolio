const mongoose = require("mongoose");

// Mongoose schema object.
const Schema = mongoose.Schema;

// Define a schema to store portfolio information.
const ContactSchema = new Schema({
    date: {
        type: String,
      },
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
      },
    email: {
        type: String,
        trim: true,
        required: "Email is Required"
      },
    message: {
        type: String,
        trim: true,
        required: "Message is Required"
      },
});

const ContactItems = mongoose.model("ContactItems", ContactSchema);

// Export the model
module.exports = ContactItems;