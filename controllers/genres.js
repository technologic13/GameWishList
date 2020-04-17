const Genre = require("../models/genre");

const getGenres = async (req, res, next) => {
  const genre = await Genre.find({});
  res.status(200).send(genre);
};
const addGenre = async (req, res, next) => {
  const genre = {
    name: req.body.name,
    abbreviation: req.body.abbreviation,
  };
  const newGenre = new Genre(genre);
  const save = await newGenre.save();
  res.status(201).send({ msg: "Genre is added", genre: save });
};
const getGenreById = async (req, res, next) => {
  const { id } = req.params;
  const genre = await Genre.findById(id).populate("games");
  res.status(200).send({ genre });
};
const deleteGenre = async (req, res, next) => {
  const { id } = req.params;
  await Genre.findByIdAndRemove(id);
  res.status(200).send({ msg: "Genre is deleted" });
};
module.exports = {
  getGenres,
  addGenre,
  getGenreById,
  deleteGenre,
};
