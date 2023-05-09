const CustomError = require("../../helpers/error/CustomError");

const customErrorHandler = (err, req, res, next) => {
  console.log("custom error handler");
  let customError = err;
  if (err.code === 11000) {
    customError = new CustomError("Duplicate Error : Please Check your Input");
  }
  console.log(customError.message, " : ", customError.status);
  res.status(404).json({
    success: false,
    message: customError.message,
  });
};

module.exports = customErrorHandler;
