const mongoose = require("mongoose");
const { Schema } = mongoose;
const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "please provide a valid email"],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "please provide a password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  place: {
    type: String,
  },
  website: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
});
//UserSchema methods
userSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
  const payload = {
    id: this.id,
    name: this.name,
  };
  //json web token oluşturmak için jwt.sign fonku kullanılır
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  return token;
};

userSchema.methods.getResetPasswordTokenFromUser = function () {
  const randomHexString = crypto.randomBytes(15).toString("hex");
  const { RESET_PASSWORD_EXPIRE } = process.env;
  console.log(randomHexString);
  const resetPasswordToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex");
  this.resetPasswordToken = resetPasswordToken;
  this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);
};
userSchema.pre("save", function (next) {
  //console.log("pre hooks save");
  //var bcrypt = require("bcryptjs");
  //parola değişmemişse diğer bilgiler değişmişse hash fonku tekrardan çalışmamalıdır
  if (!this.isModified("password")) {
    next();
  }
  bicrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bicrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});
module.exports = mongoose.model("User", userSchema); //oluşturdugumuz schemayı mongoya kaydetmiş olduks
