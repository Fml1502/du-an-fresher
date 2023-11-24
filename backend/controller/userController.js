var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const env = require("dotenv");
const { BOOLEAN, where } = require("sequelize");
const { status } = require("init");

//array chứa refreshtoken
let arrayReFreshToken = [];

const User = {
  getAll: async (req, res) => {
    try {
      const dataUser = await db.User2.findAll();
      return res.status(200).json(dataUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  postUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.passWord.toString(), salt);

      const newUser = await new db.User2({
        nameUser: req.body.nameUser,
        passWord: hashed,
        email: req.body.email,
        admin: req.body.admin,
      });
      const user = await newUser.save();

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await db.User2.findOne({
        where: {
          nameUser: req.body.nameUser,
        },
      });
      //Tìm kiếm tài khoản trên db khi nhập tài khoản

      if (!user) {
        return res.status(404).json("Wrong nameUser!");
      }
      //nếu không tìm thấy sẽ báo sai tài khoản

      const validPassword = await bcrypt.compare(
        req.body.passWord.toString(),
        user.passWord
      );
      //so sánh mật khẩu đã nhập và mật khẩu mã hóa trên db bằng brypt.compare

      if (!validPassword) {
        return res.status(401).json("Wrong passWord!");
      }
      // nếu không chính xác sẽ báo sai mật khẩu

      if (user && validPassword) {
        //create access Token
        const accessToken = jwt.sign(
          {
            id: user.id,
            admin: user.admin,
          },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: "600s" }
        );
        //Nếu tài khoản và mật khẩu nhập đúng sẽ tạo một access Token dùng để xác nhận danh tính của người dùng
        //và cấp quyền cho người dùng

        //Create fresh token
        const refreshToken = jwt.sign(
          {
            id: user.id,
            admin: user.admin,
          },
          process.env.JWT_REFRESH_KEY,
          { expiresIn: "365d" }
        );
        //Nếu tài khoản và mật khẩu nhập đúng sẽ tạo một reFreshToken dùng để cấp lại access Token cho người dùng

        //Thêm refresh token vô array rỗng
        arrayReFreshToken.push(refreshToken);

        //lưu refresh token vào cookie
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          samSite: "strict",
        });
        return res.status(200).json({ user, accessToken });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //làm mới Token refresh
  requestReFreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken; // lấy refreshtoken trên cookie
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    //nếu không tìm thấy thì là người dùng chưa đăng nhập nên chưa tạo refresh token

    if (!arrayReFreshToken.includes(refreshToken)) {
      return res.status(403).json("Refresh token không chính xác");
    }
    //Kiểm tra xem refreshToken không giống với refreshToken trong db thì báo lỗi

    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      // kiểm tra xem refreshToken có chính xác hay không

      if (err) {
        console.log(err);
      }
      //nếu sai thì báo lỗi

      //nếu không sai thì sẽ tạo refreshToken và accessToken mới
      arrayReFreshToken = arrayReFreshToken.filter(
        (token) => token !== refreshToken
      );
      const newAccessToken = jwt.sign(
        {
          id: user.id,
          admin: user.admin,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "600s" }
      );
      const newRefreshToken = jwt.sign(
        {
          id: user.id,
          admin: user.admin,
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d" }
      );
      arrayReFreshToken.push(newRefreshToken);
      //lưu refresh token vào cookie
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        samSite: "strict",
      });
      return res.status(200).json({ accessToken: newAccessToken });
    });
  },

  deleteUser: async (req, res) => {
    try {
      const user = await db.User2.findOne({
        where: {
          id: req.params.id,
        },
      });
      await user.destroy();
      if (user) {
        return res.status(200).json("Xóa user thành công");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //logout
  userLogout: async (req, res) => {
    res.clearCookie("refreshToken");
    //xóa refreshToken lưu trong cookies
    arrayReFreshToken = arrayReFreshToken.filter(
      (token) => token !== req.cookies.refreshToken
    );
    //reset lại db
    return res.status(200).json("Logout!");
  },
};

module.exports = User;
