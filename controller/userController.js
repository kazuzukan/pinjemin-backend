const db = require("../models");
const User = db.users;
// const Op = db.sequelize.Op;

module.exports = {
  async findAllUser(req, res){
    try {
      const user = await User.findAll();
      res.status(200).send({
        status: "Success",
        data: user,
        user: req.user
      })
    } catch(error){
      res.status(500).send({
        status: "error",
        message: "Some error occured while retrieving User",
        data: error
      })
    }
  },

  async findOne(req, res){
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      if (user){
        res.status(200).send({
          is_success: true,
          status: "Success",
          data: user
        });
      } else {
        res.status(404).send({
          is_success: false,
          status: "Success",
          message: "User not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while retrieving User",
        data: error
      })
    }
  },

  async create(req, res) {
    try {
      const body = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        point: req.body.point,
        isambassador: req.body.isambassador,
      };
      const user = await User.create(body);
      res.status(200).send({
        status: "Success",
        data: user
      });
    } catch(error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while create User",
        data: error
      })
    }
  }, 

  async update(req, res) {
    try {
      const id = req.params.id;
      const body = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        point: req.body.point,
        isambassador: req.body.isambassador,
      };
      const user = await User.update(body, {
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        data: user
      });
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while update User",
        data: error
      });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      const user = await User.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send({
        status: "Success",
        message: `${user} user deleted`
      })
    } catch (error) {
      res.status(500).send({
        status: "Error",
        message: "Some error occurred while delete User",
        data: error
      });
    }
  },

  async findUserProduct(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id, {
        include: [{
          model: db.product,
          include: [{
            model: db.section
          }]
        }]
      })
      if (user) {
        res.status(200).send({
          is_success: true,
          status: "Success",
          data: user
        });
      } else {
        res.status(404).send({
          is_success: false,
          status: "Success",
          message: "user product not found"
        });
      }
    } catch (error) {
      res.status(500).send({
        is_success: false,
        status: "Error",
        message: "Some error occurred while retrieving User",
        data: error
      })
    }
  }, 

  async findUserLoan(req, res){
    try {
      const id = req.params.id;
      const user = await User.findByPk(id, {
        include: [{
          model: db.loan, 
          as: 'loansFromUser',
          include: [{
            model: db.product,
            include: [{
              model: db.users
            },
            {
              model: db.section
            }
          ]
          }]
          },
          {
            model: db.loan, 
            as: 'loansToUser',
            include: [{
              model: db.product,
              include: [{
                model: db.users
              },
              {
                model: db.section
              }
            ]
            }]
          }
        ]
      })
      if (user) {
        res.status(200).send({
          is_success: true,
          status: "Success",
          data: user
        });
      } else {
        res.status(404).send({
          is_success: false,
          status: "Success",
          message: "user loans product not found"
        });
      }
    } catch (error){
        res.status(500).send({
          is_success: false,
          status: "Error",
          message: "Some error occurred while retrieving user's loan",
          data: error
        })
    }
  }
}