const db = require("../models");
const User = db.users;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    async register(req, res) {
        const hasedPassword = await bcrypt.hashSync(req.body.password);
        // const hasedPassword2 = await bcrypt.hashSync("B4c0/\/", req.body.password);
        console.log('hasedPassword: ', hasedPassword)
        // console.log('hasedPassword2: ', hasedPassword2)
        const body = {
            password: hasedPassword,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            phone: req.body.phone,
            gender: req.body.gender,
            point: req.body.point,
            isambassador: req.body.isambassador,
        }
        try {
            await User.findOne({
                where: {
                    email: req.body.email
                }
            }).then((userdata) => {
                if (!userdata) {
                    User.create(body).then((data) => {
                        res.status(200).send({
                            status: true,
                            messages: "Success",
                            results: data
                        })
                    }).catch((error) => {
                        res.status(500).send({
                            status: false,
                            messages: "Some error occurred while register User",
                            results: error
                        });
                    })
                } else {
                    res.status(400).send( {
                        status: false,
                        messages: 'Email already exist',
                        results: null
                    }
                    );
                }
            }).catch((err) => {
                res.status(400).send(err);
            });
        } catch (error) {
            res.status(500).send({
                status: false,
                messages: "Some error occurred while register User",
                results: error
            });
        }
    },

    async login(req, res) {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user) {
            const password = await bcrypt.compare(req.body.password, user.password);
            if (!password) {
                return res.status(400).send({
                    status: false,
                    messages: 'Invalid password'
                });
            }
            const token = jwt.sign({id:user.id}, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send({results: user, token, status: true, messages:'Success login'});
        } else {
            return res.status(400).send({
                status: false,
                messages: 'Email is not found'
            });
        }
    }
}