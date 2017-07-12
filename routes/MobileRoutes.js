var express = require('express');
var mobileRoutes = express.Router();
var mobile = require('../models/mobile');


mobileRoutes.post('/', function(req, res) {
  var newPhone = new mobile(req.body);
    newPhone.save(function(err, phone) {
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(phone);
        }
    })
});


mobileRoutes.route('/')
.get(function(req, res){
    mobile.find(function(err, workout){
        if(err){
            res.status(500).send(err);
        } else {
            res.send(workout)
        }
    })
})


module.exports = mobileRoutes;