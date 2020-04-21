const Joi = require("joi");

const addUserSchema = Joi.object({
  name: Joi.string().min(2).required(),
  surname: Joi.string().min(2).required(),
  nickname: Joi.string().min(5).required(),
  age: Joi.number().required(),
  email: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100}$/)
    .required(),
});

const addWishlistSchema = Joi.object({
  game: Joi.string()
    .regex(/^[0-9a-f]{24}$/)
    .required(),
});
const validateLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { addUserSchema, addWishlistSchema, validateLogin };
