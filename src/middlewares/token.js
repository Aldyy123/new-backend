const jwt = require('jsonwebtoken')
const { secret } = require('../config/Config')
const { ErrorHandler, handleError } = require('./errorHandle')
class WebToken {
  async generateToken (user) {
    try {
      const token = await jwt.sign({ user }, secret)
      return token
    } catch (error) {
      throw new ErrorHandler(202, error.message)
    }
  }

  async verifyToken (req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    try {
      await jwt.verify(token, secret)
      next()
    } catch (error) {
      handleError({ statusCode: 500, message: 'server' }, res)
    }
  }
}

const webToken = new WebToken()
module.exports = webToken
