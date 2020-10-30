var mongoose = require("mongoose");

var coursesSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Courses", coursesSchema);
