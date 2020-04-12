const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares/validation/validation");
const Games = require("../controllers/games");
const {
  addGameSchema,
  changeGameSchema,
} = require("../middlewares/validation/schemas/games");

const {
  getAllGames,
  getGameByName,
  getGameDesc,
  searchGame,
  addGame,
  deleteGame,
  updateGame,
} = Games;

router.route("/").get(getAllGames).post(validation(addGameSchema), addGame);
router
  .route("/:id")
  .get(getGameByName)
  .put(validation(addGameSchema), updateGame)
  .delete(deleteGame)
  .patch(validation(changeGameSchema), updateGame);
router.get("/:id/desc", getGameDesc);
router.get("/search/:name", searchGame);

module.exports = router;
