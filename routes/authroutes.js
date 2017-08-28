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

    User.findOne({username: req.body.username}, function (err, user) {
        if (err) res.status(500).send(err);
        if (!user) {
            res.status(401).send({success: false, message: "User with the provided username was not found"})
        } else if (user) {
            user.checkPassword(req.body.password, function (err, match) {
                if (err) throw (err);
                if (!match) res.status(401).send({success: false, message: "Incorrect password"});
                else {
                    var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
                     res.send({token: token, user:user.toObject(), success: true, message: "Here's your token!"})
                }
            });
        }
    });
});

authRoutes.post('/change-password', function(req, res) {
    User.findById(req.user._id, function(err, user) {
        if(err) {
            res.status(500).send(err);
        } else {
            user.password = req.body.newPassword || user.password;
             user.save(function(err, user) {
                 res.send({success: true, user: user.withoutPassword()});
             });
        }
    });
});

module.exports = authRoutes;
