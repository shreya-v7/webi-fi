var mongoose = require("mongoose");

var newsSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model("Newsletter", newsSchema);
