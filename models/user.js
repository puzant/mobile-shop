var mongoose = require("mongoose");  
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

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

userSchema.pre("save", function (next) {  
    var user = this;
    if (!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {  
    bcrypt.compare(passwordAttempt, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = mongoose.model("User", userSchema); 