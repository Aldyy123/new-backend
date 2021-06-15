const schemaJoi = require('../utils/validation')
const { ErrorHandler } = require('./errorHandle')

const userValidate = async (req, res, next) => {
  try {
    await schemaJoi.validateAsync(req.body)
    next()
  } catch (error) {
    res.json(new ErrorHandler(404, error.message))
  }
}

module.exports = {
  userValidate
}
