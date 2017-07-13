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
            res.status(200).send(cart);
        }
    })
})

.get(function(req, res) {
    Cart.findOne(function(err, data) {
        if(err) res.status(500).send(err);
        res.send(data)
    })
})

CartRoutes.route('/:id/:index')
.delete(function(req, res) {
    console.log(req.params.id)
    Cart.findOne({user:req.params.id}, function(err, cart) {
        if(err) res.status(500).send(cart);
        console.log(cart)
        cart.mobile.splice(req.params.index, 1);
        cart.save(function(err, cart){
            if(err) res.status(500).send(err);
             res.status(201).send(cart);
        })
    })
})

module.exports = CartRoutes;
