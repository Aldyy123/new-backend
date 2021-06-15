const express = require('express')
const Router = express.Router()
const productController = require('../controllers/product-controller')

Router.route('/').get(productController.listProducts)
Router.route('/add-product').post(productController.saveProduct)
Router.route('/update-product').post(productController.updateProduct)
Router.route('/get-product').get(productController.getProduct)
module.exports = Router
