const express = require('express')
const Router = express.Router()
const productController = require('../controllers/product-controller')
const Token = require('../middlewares/token')

Router.route('/').post(Token.verifyToken, productController.listProducts)
Router.route('/add-product').post(Token.verifyToken, productController.saveProduct)
Router.route('/update-product/:id').post(Token.verifyToken, productController.updateProduct)
Router.route('/get-product/:id').post(Token.verifyToken, productController.getProduct)
module.exports = Router
