const CustomError = require("../helpers/error/CustomError");
const User = require("../models/user");
const asyncErrorWrapper = require("express-async-handler"); //hata yakalama işlemlerini kolaylaştırır
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {
  validateUserInputs,
  comparePasswords,
} = require("../helpers/input/inputHelpers");

const sendEmail = require("../helpers/libraries/sendEmail");
const register = asyncErrorWrapper(async (req, res, next) => {
  //post data

  //console.log(req.body);
  const { name, email, password, role } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  //console.log(res);
  sendJwtToClient(user, res);
});

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!validateUserInputs(email, password)) {
    return next(new CustomError("Please Check Your Inputs...", 400));
  }
  const user = await User.findOne({ email }).select("+password"); //şifreyi kullanıcıya göstermeyeceğiz fakat kullanıcının giridiğiyle kendi şifresi
  //aynı mı diye kontrol yapmamız gerekiyor
  // console.log(user);

  if (!comparePasswords(password, user.password)) {
    return next(new CustomError("Please Check Your Credentials...", 400));
  }

  sendJwtToClient(user, res);
  //console.log(email, password);
});

const logout = asyncErrorWrapper(async (req, res, next) => {
  const { NODE_ENV } = process.env;
  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()), //cookienin bitiş süresünü şimdi yapıyoruz hemen bitiyor
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: "Logout Successfull",
    });
});
const getUser = (req, res, next) => {
  res.json({
    success: true,
    message: "welcome",
    data: {
      id: req.user.id,
      name: req.user.name,
    },
  });
};
const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const resetEmail = req.body.email;
  const user = await User.findOne({ email: resetEmail }).select("+password");
  if (!user) {
    return next(new CustomError("There is no user with that email", 400));
  }
  const resetPasswordToken = user.getResetPasswordTokenFromUser();

  await user.save();
  const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`;
  const emailTemplate = ` 
  <h3>Reset Your Password</h3>
  <p>This <a href = '${resetPasswordUrl}' target = '_blank'>link</a> will expire in 1 hour. </p>
  `;

  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: resetEmail,
      subject: "Reset Your Password",
      html: emailTemplate,
    });
    return res.status(200).json({
      success: true,
      message: "Token Sent To Your Email",
    });
  } catch (err) {
    console.log(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next(new CustomError("Email Could Not Be Sent", 500));
  }
});
const imageUpload = asyncErrorWrapper(async (req, res, next) => {
  const user = User.findByIdAndUpdate(
    req.user.id,
    {
      profile_image: req.savedProfileImage,
    },
    { new: true, runValidators: true } //güncellenmiş kullanıcı bilgisini getirmek için kullanmak zorundayız
  );
  res.status(200).json({
    success: true,
    message: "Image Upload Successfull",
    data: user,
  });
});

module.exports = {
  register,
  getUser,
  login,
  logout,
  imageUpload,
  forgotPassword,
};
