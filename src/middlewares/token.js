const jwt = require('jsonwebtoken')
const { secret } = require('../config/Config')
const { ErrorHandler } = require('./errorHandle')
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
      const verify = await jwt.verify(token, secret)
      req.session = verify
      console.log(req.session)
      next()
    } catch (error) {
      throw new ErrorHandler(202, error.message)
    }
  }
}

const webToken = new WebToken()
module.exports = webToken
