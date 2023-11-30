// const multer = require("multer");
// const path = require("path");

// const storage = (destination) =>
//   multer.diskStorage({
//     destination: destination,
//     filename: function (req, file, cb) {
//       return cb(
//         null,
//         `${file.fieldname}_${Date.now()}${path.extname(file.orginalname)}`
//       );
//     },
//   });
// const fileUpload = (destination) =>
//   multer({
//     storage: storage(destination),
//     limits: {
//       fileSize: 2 * 1024 * 1024,
//     },
//     fileFilter: (req, file, cb) => {
//       if (
//         file.mimetype == "image/png" ||
//         file.mimetype == "image/jpg" ||
//         file.mimetype == "image/jpeg"
//       ) {
//         cb(null, true);
//       } else {
//         cb(null, false);
//         return cb(new Error("Only .png .jpg and .jpeg format allowed!"));
//       }
//     },
//     onError: function (err, next) {
//       return console.log("error", err);
//       next(err);
//     },
//   }).single("image");

// module.exports = fileUpload;
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

function configureMulter() {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "storage/images");
    },
    filename: function (req, file, cb) {
      return cb(
        null,
        file.originalname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const upload = multer({ storage: storage });

  return upload.single("file");
}

module.exports = configureMulter;
