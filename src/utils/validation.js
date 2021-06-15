const joi = require('joi')

const schema = joi
  .object({
    password: joi.string().required().trim().min(3),
    email: joi.string().required().trim().email()
  })

module.exports = schema
