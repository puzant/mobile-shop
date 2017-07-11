var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mobileSchema = new Schema({
    name: String,
    description: {
        type: String,
        required: true
    },
    price: {
      type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Mobile", mobileSchema);
