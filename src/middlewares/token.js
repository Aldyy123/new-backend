const jwt = require('jsonwebtoken')
const { secret } = require('../config/Config')
const { ErrorHandler, handleError } = require('./errorHandle')
class WebToken {
  async generateToken (req, res) {
    try {
      const token = await jwt.sign({ name: 'admin' }, secret)
      res.json({ token: `Bearer ${token}` })
    } catch (error) {
      throw new ErrorHandler(202, error.message)
    }
  }

  async verifyToken (req, res, next) {
    try {
      if (req.headers.authorization !== undefined) {
        const token = req.headers.authorization.split(' ')[1]
        await jwt.verify(token, secret)
        next()
      } else {
        handleError({ statusCode: 202, message: 'API Pribadi, harus minta access ke pemilik ya :)' })
      }
    } catch (error) {
      console.log(error)
      handleError({ statusCode: 500, message: 'API Pribadi, harus minta access ke pemilik ya :)' }, res)
    }
  }
}

const webToken = new WebToken()
module.exports = webToken
