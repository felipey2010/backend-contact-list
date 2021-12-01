const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create contact schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
});

// Name of collection in MongoDB --> contacts
const Contact = mongoose.model("contacts", ContactSchema);

module.exports = Contact;
