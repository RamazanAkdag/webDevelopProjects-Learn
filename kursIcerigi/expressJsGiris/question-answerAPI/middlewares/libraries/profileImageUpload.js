const multer = require("multer");
const path = require("path");

const CustomError = require("../../helpers/error/CustomError");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootdir = path.dirname(require.main.filename);
    cb(null, path.join(rootdir, "/public/uploads"));
  },
  filename: function (req, file, cb) {
    //file - mimtype - image/png
    const extension = file.mimetype.split("/")[1];
    req.savedProfileImage = "image_" + req.user.id + "." + extension;
    cb(null, req.savedProfileImage);
  },
});

const fileFilter = (req, file, cb) => {
  let allowedMimeTypes = ["image/jpg", "image/gif", "image/png", "image/jpeg"];
  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(
      new CustomError("Please Provide a Valid Profile Image...", 400),
      false
    );
  }
  return cb(null, true);
};

const profileImageUpload = multer({ storage, fileFilter });

module.exports = profileImageUpload;
