const express = require("express");
const {
  register,
  getUser,
  login,
  logout,
  imageUpload,
  forgotPassword,
} = require("../controllers/auth");
const { getAccesToRoute } = require("../middlewares/authorization/auth");
const profileImageUpload = require("../middlewares/libraries/profileImageUpload");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccesToRoute, getUser); //yönlendirme yapabilmemiz için giriş yapmak gerekli
router.get("/logout", getAccesToRoute, logout); //login olmadan logout yapılamaz
router.post(
  "/upload",
  [getAccesToRoute, profileImageUpload.single("profile_image")],
  imageUpload
);
router.post("/forgotpassword", forgotPassword);
// router.get("/register", (req, res) => {
//   res.send("auth register home page");
// });

module.exports = router;
