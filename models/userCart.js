var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userCartSchema = new Schema({
  user: {
    type:Schema.Types.ObjectId,
    ref : 'User'
  },
  mobile : [{
    type: Schema.Types.ObjectId,
    ref : 'Mobile'
  }]

});

module.exports = mongoose.model("UserCart", userCartSchema);
