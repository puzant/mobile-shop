var express = require('express');
var authRoutes = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

authRoutes.post('/signup', function (req, res) {
    User.findOne({
            username: req.body.username
        },
        function (err, exsistingUser) {
            if (err) return res.status(500).send(err);
            if (exsistingUser) return res.send({
                success: false,
                message: "username already taken"
            });

            var newUser = new User(req.body);
            newUser.save(function (err, userObj) {
                if (err) return res.status(500).send(err);
                return res.send({
                    user: userObj,
                    message: "successfully created a new user"
                });

            });
        });
});

authRoutes.post("/login", function (req, res) {

    User.findOne({
        username: req.body.username.toLowerCase()
    }, function (err, user) {
                console.log(req.body.password);
                console.log(req.body.username);
    

        if (err) return res.status(500).send(err);

        if (!user || user.password !== req.body.password) {
            return res.status(403).send({
                success: false,
                message: "username or password are incorrect"
            })
        }

        var token = jwt.sign(user.toObject(), config.secret, {
            expiresIn: "24h"
        });

        return res.send({
            token: token,
            user: user.toObject(),    
            success: true,
            message: "Here's your token!"
        })
        
    });
});

module.exports = authRoutes;
