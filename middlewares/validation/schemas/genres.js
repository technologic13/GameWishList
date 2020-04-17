const Joi = require("joi");

const addGenreSchema = Joi.object({
  name: Joi.string().required(),
  abbreviation: Joi.string().required(),
});
module.exports = { addGenreSchema };
