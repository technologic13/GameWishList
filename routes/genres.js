const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares/validation/validation");
const { auth } = require("../middlewares/validation/auth");
const Genres = require("../controllers/genres");
const { addGenreSchema } = require("../middlewares/validation/schemas/genres");

const { getGenres, addGenre, deleteGenre, getGenreById } = Genres;

router
  .route("/")
  .get(auth, getGenres)
  .post([auth, validation(addGenreSchema)], addGenre);
router.route("/:id").get(auth, getGenreById).delete(auth, deleteGenre);
module.exports = router;
