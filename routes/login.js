const express = require("express");
const router = express.Router();

const Login = require("../controllers/login");

const { validation } = require("../middlewares/validation/validation");
const { validateLogin } = require("../middlewares/validation/schemas/users");

const { logUser } = Login;

router.route("/").post(validation(validateLogin), logUser);

module.exports = router;
