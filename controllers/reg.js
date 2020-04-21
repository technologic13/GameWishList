const User = require("../models/user");
const bcrypt = require("bcrypt");
const addUser = async (req, res, next) => {
  const newUser = {
    name: req.body.name,
    surname: req.body.surname,
    nickname: req.body.nickname,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  };
  const user = new User(newUser);
  user.password = await bcrypt.hash(req.body.password, 10);
  console.log(user.password);
  await user.save();
  const save = await user.save();
  res.status(201).send({ message: "User saved!", user: save });
};

module.exports = {
  addUser,
};
