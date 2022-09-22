const Joi = require('joi');

const schemas = {
  create: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
  }),

  update: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
  }),

};
module.exports = schemas;
