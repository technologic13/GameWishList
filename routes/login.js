const express = require("express");
const router = express.Router();

const Login = require("../controllers/login");

const { logUser } = Login;

router.route("/").post(logUser);

module.exports = router;
