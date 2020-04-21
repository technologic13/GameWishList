const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  name: String,
  surname: String,
  nickname: String,
  age: Number,
  email: String,
  password: String,
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
});
const User = mongoose.model("user", user);
module.exports = User;
