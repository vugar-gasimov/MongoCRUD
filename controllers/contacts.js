const Contact = require("../models/contact");
const { CustomError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt -__v");
  res.json(result);
};

const addAContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOne({ _id: id });
  if (!result) {
    throw CustomError(404, "Not found");
  }
  res.json(result);
};

// const updateContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.updateContactById(id, req.body);
//   if (!result) {
//     throw CustomError(404, "Not Found");
//   }
//   res.json(result);
// };

// const removeContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.removeContactById(id);
//   if (!result) {
//     throw CustomError(404, "Not Found");
//   }
//   res.json({
//     message: "Contact deleted successfully",
//   });
// };
module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  addAContact: ctrlWrapper(addAContact),
  getContactById: ctrlWrapper(getContactById),
  // updateContactById: ctrlWrapper(updateContactById),
  // removeContactById: ctrlWrapper(removeContactById),
};
