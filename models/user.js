const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  password: String
});

let User = mongoose.model("User",userSchema);

module.exports=User;
