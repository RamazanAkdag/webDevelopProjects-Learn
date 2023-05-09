const JsonWebToken = require("jsonwebtoken");
const CustomError = require("../../helpers/error/CustomError");
const {
  isTokenIncluded,
  getAccesTokenFromHeader,
} = require("../../helpers/authorization/tokenHelpers");

const getAccesToRoute = (req, res, next) => {
  console.log(req.headers.authorization);
  if (!isTokenIncluded(req)) {
    return next(
      new CustomError("You are not authorized to access this route ", 401)
    );
  }
  const { JWT_SECRET_KEY } = process.env;
  const acces_token = getAccesTokenFromHeader(req);
  JsonWebToken.verify(acces_token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this route"),
        401
      );
    }
    req.user = {
      id: decoded.id,
      name: decoded.name,
    };
    next();
  });
};
const getAdminAccess = (module.exports = {
  getAccesToRoute,
});
