const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const genre = new Schema({
  name: String,
  abbreviation: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
});
const Genre = mongoose.model("genre", genre);
module.exports = Genre;
