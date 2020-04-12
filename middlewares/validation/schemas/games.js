const Joi = require("joi");

const addGameSchema = Joi.object({
  title: Joi.string().required(),
  rating: Joi.number().required(),
  reviews: Joi.string(),
  price: Joi.number().required(),
  discount: Joi.number().required(),
  year: Joi.number().required(),
  developer: Joi.string().required(),
  genres: Joi.array().items(Joi.string()),
  publisher: Joi.string().required(),
  desc: Joi.string().required(),
});

const changeGameSchema = Joi.object({
  title: Joi.string(),
  rating: Joi.number(),
  reviews: Joi.string(),
  price: Joi.number(),
  discount: Joi.number(),
  year: Joi.number(),
  developer: Joi.string(),
  genres: Joi.array().items(Joi.string()),
  publisher: Joi.string(),
  desc: Joi.string(),
});

module.exports = { addGameSchema, changeGameSchema };
