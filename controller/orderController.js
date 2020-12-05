const db = require("../models");
const Order = db.order;
// const Op = db.sequelize.Op;

module.exports = {
  async findAllOrder(req, res) {
    try {
      const order = await Order.findAll();
      res.status(200).send({
        status: "Success",
        data: order
      })
    } catch (error) {
      res.status(500).send({
        status: "error",
        message: "Some error occured while retrieving order",
        data: error
      })
    }
  },

  async findOne(req, res) {
    try {
      const id = req.params.id;
      const order = await Order.findByPk(id, {
        include: [{
          model: db.product
        },{
          model: db.users
        }]
      });
      if (order) {
        res.status(200).send({
          status: "Success",
          data: order
        });
      } else {
        res.status(404).send({
          status: "Success",
          message: "Order not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while retrieving order",
        data: error
      })
    }
  },

  async create(req, res) {
    try {
      const body = {
        name: req.body.name,
        address: req.body.address,
        starDate: req.body.starDate,
        endDate: req.body.endDate,
        point: req.body.point,
        status: req.body.status,
        userId: req.body.userId,
        productId: req.body.productId
      };
      const order = await Order.create(body);
      res.status(200).send({
        status: "Success",
        data: order
      });
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while create order",
        data: error
      })
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const body = {
        name: req.body.name,
        address: req.body.address,
        starDate: req.body.starDate,
        endDate: req.body.endDate,
        point: req.body.point,
        status: req.body.status,
        userId: req.body.userId,
        productId: req.body.productId
      };
      const order = await Order.update(body, {
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        data: order
      });
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while update order",
        data: error
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      const order = await Order.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        message: `${order} order deleted`
      })
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while delete order",
        data: error
      });
    }
  },
}