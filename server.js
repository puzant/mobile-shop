var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");
var config = require('./config');


var port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));
 app.use('/auth', require('./routes/authroutes'));

mongoose.connect(config.database, function(err) {
    if(err) throw err; 
    console.log("connected to the database");
});
//
// mongoose.connect("mongodb://localhost/user", function (err) {
//     if (err) throw err;
//     console.log("Successfully connected to the database");
// });

app.get("/", function (req, res) {
    res.send("It's working");
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
