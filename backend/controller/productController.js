const db = require("../models");

const multer = require("multer");
const Product = {
  // nhận dữ liệu
  // getAll: async (req, res) => {
  //   const dataProduct = await db.Product.findAll();
  //   res.json(dataProduct);
  // },

  getAll: async (req, res) => {
    // Trang hiện tại (nếu không có, sử dụng giá trị mặc định là 1)
    const page = parseInt(req.query.page) || 1;

    // Số lượng sản phẩm trên mỗi trang (nếu không có, sử dụng giá trị mặc định là 10)
    const pageSize = parseInt(req.query.pageSize) || 10;

    // Tính toán vị trí bắt đầu của sản phẩm trong cơ sở dữ liệu
    const offset = (page - 1) * pageSize;

    try {
      // Lấy dữ liệu sản phẩm từ cơ sở dữ liệu với phân trang
      const dataProduct = await db.Product.findAndCountAll({
        limit: pageSize,
        offset: offset,
      });

      // Trả về dữ liệu thông qua callback db.render để xử lý định dạng
      db.render(req, res, {
        data: dataProduct.rows,
        totalItems: dataProduct.count,
        totalPages: Math.ceil(dataProduct.count / pageSize),
        currentPage: page,
        pageSize: pageSize,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // getProductById: async (req, res) => {
  //   let data = res.locals.data;
  //   console.log(data);

  //   const { originalUrl } = req;

  //   if (originalUrl === "/product" || /^\/product\?.*$/.test(originalUrl)) {
  //     data = data.map((product) => ({
  //       id: product.id,
  //       namPr: product.namPr,
  //       pricePr: product.pricePr,
  //       imgPr: product.imgPr,
  //       detail: product.detail,
  //     }));
  //   }
  //   res.jsonp(data);
  // },

  // Thêm dữ liệu
  postProduct: (req, res) => {
    console.log(req.body, "req");
    db.Product.create(req.body)
      .then((data) => {
        res.json("them thanh cong");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("that bai vi ngai thanh cong");
      });
  },
  // postProduct: (req, res, next) => {
  //   db.Product.create(req.body)
  //     .then((data) => {
  //       res.json("them thanh cong");
  //     })
  //     .catch((err) => {
  //       res.status(500).json("that bai vi ngai thanh cong");
  //     });
  // },

  //   Sửa dữ liệu
  updateProduct: (req, res) => {
    db.Product.update(
      {
        namePr: req.body.namePr,
        pricePr: req.body.pricePr,
        detail: req.body.detail,
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
  deleteProduct: (req, res) => {
    console.log(req.body);
    db.Product.destroy({
      where: { id: req.params.id },
    }).then((data) => {
      res.json("Xóa thành công");
    });
    // });
  },
};

db.render = (req, res, options) => {
  let data = options.data;

  const { originalUrl } = req;

  if (originalUrl === "/product" || /^\/product\?.*$/.test(originalUrl)) {
    data = data.map((product) => ({
      id: product.id,
      namePr: product.namePr,
      pricePr: product.pricePr,
      imgPr: product.imgPr,
      detail: product.detail,
    }));
  }
  // console.log(data, "data");

  // Thêm thông tin phân trang vào dữ liệu trước khi trả về
  const result = {
    data: data,
    totalItems: options.totalItems,
    totalPages: options.totalPages,
    currentPage: options.currentPage,
    pageSize: options.pageSize,
  };

  res.jsonp(result.data);
};
module.exports = Product;
