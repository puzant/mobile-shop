var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");
var config = require('./config');
var cors = require('cors');

var port = process.env.PORT || 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname)));
app.use('/auth', require('./routes/authroutes'));
app.use('/api/mobile', require('./routes/MobileRoutes'))

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("connected to the database");
});

app.get("/", function (req, res) {
    res.send("It's working");
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
