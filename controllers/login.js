const User = require("../models/user");
const bcrypt = require("bcrypt");
const logUser = async (req, res, next) => {
  const LogUserInfo = {
    email: req.body.email,
    password: req.body.password,
  };
  const email = LogUserInfo.email;
  const password = LogUserInfo.password;
  let user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).send("User not found!");
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
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
