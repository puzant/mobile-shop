var express = require('express');
var CartRoutes = express.Router();
var Cart = require('../models/userCart');


CartRoutes.route('/')
 .post(function(req, res) {
    var cart = new Cart(req.body);
    cart.user = req.user._id;
    todo.save(function(err, cart) {
        if(err) res.status(500).send(err);
          res.status(201).send(cart);
    })
})

.get(function(req, res) {
    Cart.findOneById(req.use._id, function(err, cart) {
        if(err) res.status(500).send(err);
          res.status(200).send(cart);
    })
})

module.exports = CartRoutes;
