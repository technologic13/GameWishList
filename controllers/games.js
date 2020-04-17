const Game = require("../models/game");
const Genre = require("../models/genre");
const sortGames = (a, b, value) => {
  if (a[value] < b[value]) {
    return -1;
  }
  if (a[value] > b[value]) {
    return 1;
  }
  return 0;
};
const getAllGames = async (req, res, next) => {
  let sort = req.query.sort;
  let order = req.query.order;
  let limit = req.query.limit;
  const startIndex = 0;
  const endIndex = limit;
  const game = await Game.find({});
  const limitgame = game.slice(startIndex, endIndex);
  switch (order) {
    case "asc":
      if (sort === "price") {
        games = limitgame.sort((a, b) => sortGames(a, b, "price"));
        res.status(200).send({ games });
      }
      if (sort === "discount") {
        games = limitgame.sort((a, b) => sortGames(a, b, "discount"));
        res.status(200).send({ games });
      }
      break;
    case "desc":
      if (sort === "price") {
        games = limitgame.sort((a, b) => sortGames(a, b, "price")).reverse();
        res.status(200).send({ games });
      }
      if (sort === "discount") {
        games = limitgame.sort((a, b) => sortGames(a, b, "discount")).reverse();
        res.status(200).send({ games });
      }
      break;
    default:
      res.status(200);
      res.send({ games: game });
      break;
  }
};
const searchGame = async (req, res, next) => {
  const { name } = req.params;
  const game = await Game.find({});
  console.log(game);
  games = game.filter((game) => new RegExp(name, "i").exec(game.title));
  res.status(200).send({ games });
};

const getGameById = async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findById(id);
  if (game.length === 0) {
    res.status(200).send({ err: "Error has been found!" });
  } else {
    res.status(200).send({ game });
  }
};

const getGameDesc = async (req, res, next) => {
  let id = req.params.id;
  const game = await Game.findById(id);
  const desc = game.desc;
  let reply;

  reply = {
    status: "found",
    title: game.title,
    desc: desc,
  };

  res.status(200).send(reply);
};

const addGame = async (req, res, next) => {
  const genre = await Genre.findById(req.body.genre);
  const game = {
    title: req.body.title,
    rating: req.body.rating,
    reviews: req.body.reviews,
    price: req.body.price,
    discount: req.body.discount,
    year: req.body.year,
    developer: req.body.developer,
    genre: genre,
    publisher: req.body.publisher,
    desc: req.body.desc,
  };
  if (genre) {
    delete game.genre;
    const videoGame = new Game(game);
    videoGame.genre = genre;
    const save = await videoGame.save();
    res.status(201).send({ message: "Game is saved", game: save });
  } else res.status(200).send({ error: "Wrong genre" });
};
const deleteGame = async (req, res, next) => {
  const { id } = req.params;
  await Game.findByIdAndDelete(id);
  res.status(200).send({ msg: "Game is deleted" });
};
const updateGame = async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  await Game.findByIdAndUpdate(id, update);
  res.status(200).send({ msg: "Game is updated" });
};
const clearGames = async (req, res, next) => {
  await Game.deleteMany();
  res.status(200).send("No games");
};

module.exports = {
  getAllGames,
  getGameById,
  getGameDesc,
  searchGame,
  addGame,
  deleteGame,
  updateGame,
  clearGames,
};
