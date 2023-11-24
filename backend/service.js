const express = require("express");
const mysql = require("mysql"); // hoặc 'mariadb' nếu bạn sử dụng MariaDB
const app = express();
const db = require("./models");
const port = 3333;
const multer = require("multer");
var bodyParser = require("body-parser");
const router = require("./config/apiRouter");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
// đọc dữ liệu json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(router);

// SET STORAGE
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

//upload ảnh
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

// app.post("/upload", upload.single("myFile"), (req, res, next) => {
//   const file = req.file;
//   if (!file) {
//     const error = new Error("Please upload a file");
//     error.httpStatusCode = 400;
//     return next(error);
//   }
//   res.send(file);
// });
// app.get("/upload", (req, res) => {
//   res.render("upload", { layout: false });
// });
// app.post("/upload", upload.single("myFile"), (req, res) => {
//   var img = fs.readFileSync(req.file.path);
//   var encode_image = img.toString("base64");
//   // Define a JSONobject for the image attributes for saving to database

//   var finalImg = {
//     contentType: req.file.mimetype,
//     image: new Buffer(encode_image, "base64"),
//   };
//   db.collection("quotes").insertOne(finalImg, (err, result) => {
//     console.log(result);

//     if (err) return console.log(err);

//     console.log("saved to database");
//     res.redirect("/");
//   });
// });
// app.get("/upload", (req, res) => {
//   res.render("");
// });
// Start the server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
