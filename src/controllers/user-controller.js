const UserModel = require('../models/users-model')
const Token = require('../middlewares/token')
const { ErrorHandler } = require('../middlewares/errorHandle')

class UserController {
  async registerUser (req, res) {
    try {
      const exist = await UserModel.exists({ email: req.body.email })
      if (exist) {
        res.status(404).json({ error: 'User already exists' })
      } else {
        const user = await new UserModel(req.body)
        const result = await user.save()
        const token = await Token.generateToken(result)
        res.json({ result, token })
      }
    } catch (error) {
      throw new ErrorHandler(error)
    }
  }

  async loginUser (req, res) {
    try {
      const user = await UserModel.loginUser(req.body)
      const token = await Token.generateToken(user)
      if (user.statusCode === 404) {
        res.json(user)
      } else {
        res.json({ user, token })
      }
    } catch (error) {
      res.json(new ErrorHandler(404, error.message))
    }
  }
}

const userController = new UserController()
module.exports = userController
