const express = require('express')
const Router = express.Router()
const userController = require('../controllers/user-controller')
const { userValidate } = require('../middlewares/user-validate')

Router.route('/register').post(userController.registerUser)
Router.route('/login').post(userValidate, userController.loginUser)

module.exports = Router
