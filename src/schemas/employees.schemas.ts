const Joi = require('@hapi/joi');

module.exports = {
    employee_id: Joi.string,
    name: Joi.string().required(),
    cpf: Joi.string().min(11).max(11).unique().required(),
    office: Joi.string.required(),
    birthday: Joi.date().max('now').required(),
    situation: Joi.boolean()
}