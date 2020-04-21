const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares/validation/validation");
const { auth } = require("../middlewares/validation/auth");
const Games = require("../controllers/games");
const {
  addGameSchema,
  updateGameSchema,
} = require("../middlewares/validation/schemas/games");

const {
  getAllGames,
  getGameById,
  getGameDesc,
  searchGame,
  addGame,
  deleteGame,
  updateGame,
  clearGames,
} = Games;

router
  .route("/")
  .get(auth, getAllGames)
  .post([auth, validation(addGameSchema)], addGame)
  .delete(clearGames);
router
  .route("/:id")
  .get(auth, getGameById)
  .put([auth, validation(addGameSchema)], updateGame)
  .delete(deleteGame)
  .patch([auth, validation(updateGameSchema)], updateGame);
router.get("/:id/desc", getGameDesc);
router.get("/search/:name", searchGame);

module.exports = router;
