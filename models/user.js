var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  regcourse: [],
  isconfirmed: {
    type: Boolean,
    default: false,
  },
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
