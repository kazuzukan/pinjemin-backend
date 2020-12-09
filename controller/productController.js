const db = require("../models");
const Product = db.product;
// const Op = db.sequelize.Op;

module.exports = {
  async findAllProduct(req, res){
    try {
      const product = await Product.findAll();
      res.status(200).send({
        status: "Success",
        data: product,
      })
    } catch(error){
      res.status(500).send({
        status: "error",
        message: "Some error occured while retrieving Product",
        data: error
      })
    }
  },

  async findOne(req, res){
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (product){
        res.status(200).send({
          status: "Success",
          data: product
        });
      } else {
        res.status(404).send({
          status: "Success",
          message: "Product not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while retrieving product",
        data: error
      })
    }
  },

  async create(req, res) {
    try {
      const body = {
        name: req.body.name,
        desc: req.body.desc,
        method: req.body.method,
        price: req.body.price,
        duration: req.body.duration,
        image: req.body.image,
        userId: req.body.userId,
      };
      const product = await Product.create(body);
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: product
      });
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while create product",
        data: error
      })
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const body = {
        name: req.body.name,
        desc: req.body.desc,
        method: req.body.method,
        price: req.body.price,
        duration: req.body.duration,
        image: req.body.image,
        userId: req.body.userId,
      };
      const product = await Product.update(body, {
        where: {
          id: id,
        },
      });
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: product
      });
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while update product",
        data: error
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      const product = await Product.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send({
        is_success: true,
        status: "Success",
        message: `${product} product deleted`
      })
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while delete product",
        data: error
      });
    }
  },

  async getAllRequestProduct(req, res) {
    try {
      // const id = req.params.id;
      const product = await Product.findAll({
        include: [{
          model: db.section,
        }]
      })
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: product,
      })
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while retrieving User",
        data: error
      })
    }
  }, 

  // async findRequestProduct(req, res){
  //   try {
  //     const id = req.params.id;
  //     const product = await Product.findByPk(id, {
  //       include: [{
  //         model: db.section
  //       }],
  //     })
  //     if (product) {
  //       res.status(200).send({
  //         status: "Success",
  //         data: product
  //       });
  //     } else {
  //       res.status(404).send({
  //         status: "Success",
  //         message: "product loan product not found"
  //       });
  //     }
  //   } catch (error){
  //       res.status(500).send({
  //         status: "Error",
  //         message: "Some error occurred while retrieving product loan",
  //         data: error
  //       })
  //   }
  // }
}
