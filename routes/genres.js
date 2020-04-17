const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares/validation/validation");
const Genres = require("../controllers/genres");
const { addGenreSchema } = require("../middlewares/validation/schemas/genres");

const { getGenres, addGenre, deleteGenre, getGenreById } = Genres;

router.route("/").get(getGenres).post(validation(addGenreSchema), addGenre);
router.route("/:id").get(getGenreById).delete(deleteGenre);
module.exports = router;
