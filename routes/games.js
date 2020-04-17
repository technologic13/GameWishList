const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares/validation/validation");
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
  .get(getAllGames)
  .post(validation(addGameSchema), addGame)
  .delete(clearGames);
router
  .route("/:id")
  .get(getGameById)
  .put(validation(addGameSchema), updateGame)
  .delete(deleteGame)
  .patch(validation(updateGameSchema), updateGame);
router.get("/:id/desc", getGameDesc);
router.get("/search/:name", searchGame);

module.exports = router;
