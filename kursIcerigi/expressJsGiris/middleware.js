const accessControl = (req, res, next) => {
  console.log("middleware : Acces Control");
  next();
};

module.exports = {
  //başka bir klasörde kullanacağımız için export ediyoruz
  accessControl,
};
