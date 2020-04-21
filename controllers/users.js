const User = require("../models/user");
const Game = require("../models/game");

const getUsers = async (req, res, next) => {
  const user = await User.find({});
  res.status(200).send({ user });
};

const addToWishlist = async (req, res, next) => {
  const { id } = req.params;
  const { game } = req.body;

  const user = await User.findById(id);
  const igra = await Game.findById(game);
  console.log(igra);
  if (user.wishlist.includes(game)) {
    res.status(200).send({ msg: "Game already exist in your wishlist!" });
  } else if (igra) {
    igra.users.push(id);
    const save = await igra.save();
    user.wishlist.push(game);
    await user.save();
    res.status(201).send(save);
  } else res.status(200).send({ error: "Wrong id of the game!" });
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("wishlist");
  res.status(200).send({ user });
};
const deleteGame = async (req, res, next) => {
  const { id } = req.params;
  const game = req.body.game;

  await User.updateOne({ _id: id }, { $pull: { wishlist: { $in: game } } });

  res.status(200).send({ msg: "Game is deleted" });
};
const clearUsers = async (req, res, next) => {
  await User.deleteMany();
  res.status(200).send("Empty wishlist!");
};
module.exports = {
  getUsers,
  addToWishlist,
  getUserById,
  deleteGame,
  clearUsers,
};
