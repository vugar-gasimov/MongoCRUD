const { isValidObjId } = require("mongoose");
const { CustomError } = require("../helpers/CustomError");
const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjId(id)) {
    next(CustomError(400, `${id} this is not a valid id.`));
  }
  next();
};
module.exports = isValidId;
