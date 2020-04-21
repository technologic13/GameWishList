const express = require("express");
const router = express.Router();

const Reg = require("../controllers/reg");
const { validation } = require("../middlewares/validation/validation");
const { addUserSchema } = require("../middlewares/validation/schemas/users");

const { addUser } = Reg;

router.route("/").post(validation(addUserSchema), addUser);

module.exports = router;
