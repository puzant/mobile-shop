var express = require('express');
var CartRoutes = express.Router();
var Cart = require('../models/userCart');


CartRoutes.route('/')
.post(function(req, res) {
    Cart.findOne({user:req.user._id}, function(err, cart) {
        if(err) res.status(500).send(err);
          if(cart === null) {
              var cart = new Cart();
              cart.user = req.user._id;
              cart.mobile.push(req.body._id);

              cart.save(function(err, cart) {
                  if(err) res.status(500).send(err);
                   res.status(201).send(cart);
              })
          } else {
              console.log(req.body);
              cart.mobile.push(req.body._id);
              cart.save(function(err, cart) {
                  if(err) res.status(500).send(err);
                   res.status(201).send(cart);
              })
          }
    })
})

.get(function(req, res) {
    Cart.findOne({user:req.user._id})
    .populate('mobile')
    .exec(function(err, cart) {
        if(err){
            console.log("err in cart get");
            res.status(500).send(err);
        } else {
            console.log(req.user._id);
            console.log(cart);
            res.status(200).send(cart);
        }
    })
})

//.delete(function(req, res) {
//    Cart.deleteById
//})

module.exports = CartRoutes;
