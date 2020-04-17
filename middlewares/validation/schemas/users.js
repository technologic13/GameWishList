const Joi = require("joi");

const addUserSchema = Joi.object({
  name: Joi.string().min(2).required(),
  surname: Joi.string().min(2).required(),
  nickname: Joi.string().min(5).required(),
  age: Joi.number().required(),
});

const addWishlistSchema = Joi.object({
  game: Joi.string()
    .regex(/^[0-9a-f]{24}$/)
    .required(),
});

module.exports = { addUserSchema, addWishlistSchema };
