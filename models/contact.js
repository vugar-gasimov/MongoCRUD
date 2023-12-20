const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide the contact's name."],
  },
  email: {
    type: String,
    required: [true, "Please provide the contact's email."],
  },
  phone: {
    type: String,
    required: [true, "Please provide the contact's phone number."],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
