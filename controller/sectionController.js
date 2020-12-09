const db = require("../models");
const Section = db.section;
// const Op = db.sequelize.Op;

module.exports = {
  async findAllSection(req, res) {
    try {
      const section = await Section.findAll();
      res.status(200).send({
        status: "Success",
        data: section
      })
    } catch (error) {
      res.status(500).send({
        status: "error",
        message: "Some error occured while retrieving Section",
        data: error
      })
    }
  },

  async findOne(req, res) {
    try {
      const id = req.params.id;
      const section = await Section.findByPk(id);
      if (section) {
        res.status(200).send({
          status: "Success",
          data: section
        });
      } else {
        res.status(404).send({
          status: "Success",
          message: "Section not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while retrieving section",
        data: error
      })
    }
  },

  async create(req, res) {
    try {
      const body = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        type: req.body.type,
        productId: req.body.productId
      };
      const section = await Section.create(body);
      res.status(200).send({
        status: "Success",
        data: section
      });
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while create section",
        data: error
      })
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const body = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        type: req.body.type,
        productId: req.body.productId
      };
      const section = await Section.update(body, {
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        data: section
      });
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while update section",
        data: error
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      const section = await Section.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        message: `${section} section deleted`
      })
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while delete sectionw3",
        data: error
      });
    }
  },

  async getAllRequestSection(req, res) {
    try {
      // const id = req.params.id;
      const section = await Section.findAll({
        where: {type: 0},
        include: [{
          model: db.product,
        }]
      })
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: section,
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

  async getAllOfferSection(req, res) {
    try {
      // const id = req.params.id;
      const section = await Section.findAll({
        where: {type: 1},
        include: [{
          model: db.product,
        }]
      })
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: section,
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
}