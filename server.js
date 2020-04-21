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
const users = require("./routes/users");
const genres = require("./routes/genres");
const login = require("./routes/login");
const registration = require("./routes/reg");

app.use("/api/v1/games", games);
app.use("/api/v1/users", users);
app.use("/api/v1/genres", genres);
app.use("/api/v1/login", login);
app.use("/api/v1/registration", registration);

app.listen(port, () => console.log("Server is listening on port 3000"));
