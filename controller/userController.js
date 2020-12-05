const db = require("../models");
const User = db.users;
// const Op = db.sequelize.Op;

exports.findAllUser = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};

exports.findUserProduct = (req, res) => {
  const id = req.params.id;

  User.findByPk(id, {
    include: [
      {
        model: db.product,
        include: [{
          model: db.section
        }]
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id =" + id,
      });
    });
};

exports.findUserOrder = (req,res) => {
  const id = req.params.id;
  User.findByPk(id, {
    include: [
      {
        model: db.order
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id =" + id,
      });
    });

}

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id =" + id,
      });
    });
};

exports.createUser = (req, res) => {

  User.findOrCreate({
    where: { 
      email: req.body.email
    },
    defaults: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
      address: req.body.address,
      phone: req.body.phone,
      gender: req.body.gender,
      point: req.body.point,
      isambassador: req.body.isambassador,
    }
    // default: {
    //   email: user.email,
    // }
  }) .then((data) => {
    console.log(data)
    res.send(data);
  }) .catch((err) => {
    console.log(err)
    res.status(500).send({
      message: err.message || "Error udpate User with id =" + id,
    });
  });
};

//   User.create(user)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Error udpate User with id =" + id,
//       });
//     });
// };

exports.updateUser = (req, res) => {
  const id = req.params.id;

  //constructor
  const user = {
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

  User.update(user, {
    where: {
      id: id,
    },
  })
    .then((data) => {
      res.json({
        message: "user updated",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error udpate User with id =" + id,
      });
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => {
      res.send({ message: `${data} user deleted` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
};
