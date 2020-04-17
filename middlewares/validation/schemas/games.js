const Joi = require("joi");

const addGameSchema = Joi.object({
  title: Joi.string().required(),
  rating: Joi.number().required(),
  reviews: Joi.string(),
  price: Joi.number().required(),
  discount: Joi.number().required(),
  year: Joi.number().required(),
  developer: Joi.string().required(),
  genre: Joi.string()
    .regex(/^[0-9a-f]{24}$/)
    .required(),
  publisher: Joi.string().required(),
  desc: Joi.string(),
});

const updateGameSchema = Joi.object({
  title: Joi.string(),
  rating: Joi.number(),
  reviews: Joi.string(),
  price: Joi.number(),
  discount: Joi.number(),
  year: Joi.number(),
  developer: Joi.string(),
  genres: Joi.string(),
  publisher: Joi.string(),
  desc: Joi.string(),
});

module.exports = { addGameSchema, updateGameSchema };
