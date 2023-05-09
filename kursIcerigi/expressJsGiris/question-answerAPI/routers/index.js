const express = require("express");
// /api yazıldığında doğrudan bu klasöre gelinir ve buradan devamındaki dosyalara yönlendrilir
const questions = require("./questions");
const auth = require("./auth");
const user = require("./user");

const router = express.Router();

router.use("/questions", questions); //   /api/questions geldiğinde doğrudan questionsa yönlendirme yapacağız
router.use("/auth", auth); //   /api/auth "   " ....
router.use("/user", user);

module.exports = router;
