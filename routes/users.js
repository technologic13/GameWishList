const express = require("express");
const router = express.Router();

const Users = require("../controllers/users");
const { validation } = require("../middlewares/validation/validation");
const { auth } = require("../middlewares/validation/auth");
const {
  addWishlistSchema,
} = require("../middlewares/validation/schemas/users");

const { getUsers, addToWishlist, getUserById, deleteGame, clearUsers } = Users;

router.route("/").get(auth, getUsers).delete(auth, clearUsers);
router
  .route("/:id")
  .patch([auth, validation(addWishlistSchema)], addToWishlist)
  .get(auth, getUserById)
  .delete(auth, deleteGame);
module.exports = router;
