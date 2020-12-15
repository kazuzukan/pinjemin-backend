const db = require("../models");
const Loan = db.loan;
// const Op = db.sequelize.Op;

module.exports = {
  async findAllLoan(req, res) {
    try {
      const loan = await Loan.findAll();
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: loan
      })
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "error",
        message: "Some error occured while retrieving loans",
        data: error
      })
    }
  },

  async findOne(req, res) {
    try {
      const id = req.params.id;
      const loan = await Loan.findByPk(id, {
        include: [{
          model: db.product
        }]
      });
      if (loan) {
        res.status(200).send({
          is_success: true,
          status: "Success",
          data: loan
        });
      } else {
        res.status(404).send({
          is_success: false,
          status: "Error",
          message: "Loans not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while retrieving loans",
        data: error
      })
    }
  },

  async create(req, res) {
    try {
      const body = {
        name: req.body.name,
        address: req.body.address,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        point: req.body.point,
        status: req.body.status,
        ownersUserId: req.body.ownersUserId,
        loanersUserId: req.body.loanersUserId,
        productId: req.body.productId
      };
      const loan = await Loan.create(body);
      res.status(200).send({
        is_success: true,
        status: "Success",
        data: loan
      });
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while create loans",
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
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        point: req.body.point,
        status: req.body.status,
        userId: req.body.userId,
        productId: req.body.productId
      };
      const response = await Loan.update(body, {
        where: {
          id: id,
        }
      });
      if (response) {  
        const loan = await Loan.findByPk(id, {
          include: [{
            model: db.product
          }]
        });
        
        res.status(200).send({
          is_success: true,
          status: "Success",
          data: loan
        });
      } else {
        res.status(404).send({
          is_success: false,
          status: "Error",
          message: "Loans not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while update loans",
        data: error
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      const loan = await Loan.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        message: `${loan} loan deleted`
      })
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while delete loan",
        data: error
      });
    }
  },
}