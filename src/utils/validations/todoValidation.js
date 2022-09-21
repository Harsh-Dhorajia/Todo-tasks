const Joi = require('joi');

const schemas = {
  create: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    dueDate: Joi.date(),
  }),

  update: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    dueDate: Joi.date(),
  }),

};
module.exports = schemas;
