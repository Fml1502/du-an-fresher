const jwt = require("jsonwebtoken");
const middlewareController = {
  //Xác nhận người dùng
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    //lấy token từ người dùng

    if (token) {
      const accessToken = token.split(" ")[1];
      //lấy accresstoken sau khoảng trắng

      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        //xác thực xem đã đăng nhập chưa hoặc token đã hết hạn
        if (err) {
          return res.status(403).json("Token đã hết hạn");
        }
        req.user = user;
        next();
        //nếu chính xác thì sẽ xuất ra user và tiếp tục
      });
    } else {
      return res.status(401).json("Bạn chưa được xác thực");
    }
  },

  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      // console.log(req.user.id);
      if (req.user.id == req.params.id || req.user.admin) {
        next();
        //nếu là chủ tài khoản hoặc có quyền admin thì sẽ được xóa
      } else {
        return res.status(403).json("Bạn ko có quyền xóa");
      }
    });
  },
};
module.exports = middlewareController;
