const bicrypt = require("bcryptjs");

const validateUserInputs = (email, password) => {
  return email && password;
};
const comparePasswords = (password, hashedPassword) => {
  return bicrypt.compareSync(password, hashedPassword);
};

module.exports = {
  validateUserInputs,
  comparePasswords,
};
