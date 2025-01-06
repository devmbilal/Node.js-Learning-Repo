const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    default: "Shah",
  },
  email: String,
  gender: String,
});

const User = mongoose.model("student", userSchema);

module.exports = User;
