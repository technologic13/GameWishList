const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const game = new Schema({
  title: String,
  rating: Number,
  price: Number,
  discount: Number,
  reviews: String,
  year: Number,
  developer: String,
  genre: {
    type: Schema.Types.ObjectId,
    ref: "genre",
  },
  publisher: String,
  desc: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});
const Game = mongoose.model("game", game);
module.exports = Game;
