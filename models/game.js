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
  genres: [String],
  publisher: String,
  desc: String,
});
const Game = mongoose.model("game", game);
module.exports = Game;
