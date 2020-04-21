const User = require("../models/user");
const bcrypt = require("bcrypt");
const logUser = async (req, res, next) => {
  const LogUserInfo = {
    email: req.body.email,
    password: req.body.password,
  };
  let user = await User.findOne({ email: LogUserInfo.email });
  if (!user) {
    return res.status(400).send("User not found!");
  } else {
    const validPassword = await bcrypt.compare(
      LogUserInfo.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Wrong password!");
    } else {
      res.send("Password is valid!");
    }
  }
};
module.exports = {
  logUser,
};
