const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3000;
mongoose
  .connect("mongodb://localhost:27017/gamewishlist", { useNewUrlParser: true })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.log(err));
const games = require("./routes/games");

app.use("/api/v1/games", games);

app.listen(port, () => console.log("Server is listening on port 3000"));
