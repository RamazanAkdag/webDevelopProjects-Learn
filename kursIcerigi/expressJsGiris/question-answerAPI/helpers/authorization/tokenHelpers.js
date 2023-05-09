const sendJwtToClient = (user, res) => {
  const token = user.generateJwtFromUser();
  //console.log(token);

  const { JWT_COOKIE, NODE_ENV } = process.env;
  return res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      access_token: token,
      data: {
        name: user.name,
        email: user.email,
      },
    });
};

const isTokenIncluded = (req) => {
  return (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
  );
};

const getAccesTokenFromHeader = (req) => {
  const authorization = req.headers.authorization;
  const acces_token = authorization.split(" ")[1]; //bearer: {{acces_token}} boşlukla ayırdıgımız için parçalarken de boşlua göre parçalarız
  //oluşan arrayde [0] => Bearer: , [1] => acces_token olur
  return acces_token;
};
module.exports = {
  sendJwtToClient,
  isTokenIncluded,
  getAccesTokenFromHeader,
};
