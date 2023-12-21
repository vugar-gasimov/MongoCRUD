const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const contactSchema = new Schema(
  {
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
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
