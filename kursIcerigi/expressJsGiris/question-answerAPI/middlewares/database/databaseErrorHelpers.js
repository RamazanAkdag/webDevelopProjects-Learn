const CustomError = require("../../helpers/error/CustomError");
const user = require("../../models/user");
const asyncErrorWrapper = require("express-async-handler");
const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const user = await user.finById(id);
  if (!user) {
    return next(new CustomError("There is No Such User With That ID", 400));
  }
  next();
});

module.exports = checkUserExist;
