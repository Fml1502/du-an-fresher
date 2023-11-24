const db = require("../models");

const Cart = {
  // nhận dữ liệu
  getAll: async (req, res) => {
    const dataCart = await db.Cart.findAll();
    console.log(dataCart);
    res.json(dataCart);
  },

  getById: () => {},

  // Thêm dữ liệu
  postCart: (req, res) => {
    db.Cart.create(req.body)
      .then((data) => {
        res.json("them thanh cong");
      })
      .catch((err) => {
        res.status(500).json("that bai vi ngai thanh cong");
      });
  },
  //   Sửa dữ liệu
  updateCart: (req, res) => {
    db.Cart.update(
      {
        namePr: req.body.namePr,
        soluong: req.body.soluong,
        pricePr: req.body.pricePr,
        imgPr: req.body.imgPr,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then((data) => {
        res.json("Sửa thành công");
      })
      .catch((err) => {
        res.status(500).json("sửa thất bại");
      });
  },

  //   Xóa dữ liệu
  deleteCart: (req, res) => {
    db.Cart.destroy({
      where: { id: req.body.id },
    }).then((data) => {
      res.json("Xóa thành công");
    });
    // });
  },
};

module.exports = Cart;
