const express = require("express");
const router = express.Router();

const Users = require("../controllers/users");
const { validation } = require("../middlewares/validation/validation");
const {
  addUserSchema,
  addWishlistSchema,
} = require("../middlewares/validation/schemas/users");

const {
  getUsers,
  addToWishlist,
  addUser,
  getUserById,
  deleteGame,
  clearUsers,
} = Users;

router
  .route("/")
  .get(getUsers)
  .post(validation(addUserSchema), addUser)
  .delete(clearUsers);
router
  .route("/:id")
  .patch(validation(addWishlistSchema), addToWishlist)
  .get(getUserById)
  .delete(deleteGame);
module.exports = router;
