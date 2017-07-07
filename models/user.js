var mongoose = require("mongoose");  
var Schema = mongoose.Schema;

var userSchema = new Schema({  
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
      type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema); 