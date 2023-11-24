const express = require("express");
const middlewareController = require("../controller/middlewareController");
const User = require("../controller/userController");
const Product = require("../controller/productController");
const Cart = require("../controller/cartController");

var router = express.Router();

//user
router.get("/user", middlewareController.verifyToken, User.getAll);
//xác thực người dùng trước mới cho xuất dữ liệu user

router.post("/postUser", User.postUser);
router.post("/loginUser", User.loginUser);
router.delete(
  "/deleteUser/:id",
  middlewareController.verifyTokenAndAdminAuth,
  User.deleteUser
);
//Xóa người dùng: chỉ khi là admin hoặc là chủ tài khoản mới được xóa

router.post("/refreshToken", User.requestReFreshToken);
router.post("/logout", middlewareController.verifyToken, User.userLogout);

// router.post("/registerUser", User.registerUser);

//product

router.get("/product", Product.getAll);
router.post("/postProduct", Product.postProduct);
router.put("/updateProduct", Product.updateProduct);
router.delete("/deleteProduct/:id", Product.deleteProduct);

//Cart
router.get("/cart", Cart.getAll);
router.post("/postCart", Cart.postCart);
router.put("/updateCart", Cart.updateCart);
router.delete("/deleteCart", Cart.deleteCart);

module.exports = router;
