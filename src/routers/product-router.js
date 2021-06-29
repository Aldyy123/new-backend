const express = require('express')
const Router = express.Router()
const productController = require('../controllers/product-controller')
const Token = require('../middlewares/token')

/**
 * @api {GET} products/ Products Arsy
 * @apiName GetProducts
 * @apiDefine AccessAllProducts
 * @apiPermission admin
 * @apiParam (Parameters) {String} [sort] Is sort optional
 * @apiGroup Products
 * @apiSuccess (200) {String} name
 * @apiSuccess (200) {Array} images
 * @apiSuccess (200) {Number} price
 * @apiSuccess (200) {String} description
 * @apiSuccess (200) {String} product
 */
Router.get('/', Token.verifyToken, productController.listProducts)

/**
 * @api {POST} products/add-product/:id
 * @apiName AddProduct
 * @apiGroup Products
 * * @apiSuccess (200) {String} name
 * @apiSuccess (200) {Array} images
 * @apiSuccess (200) {Number} price
 * @apiSuccess (200) {String} description
 * @apiSuccess (200) {String} product
*/
Router.route('/add-product').post(productController.saveProduct)
/**
 * @api {POST} products/update-product/:id
 * @apiName UpdateProduct
 * @apiGroup Products
 * * @apiSuccess (200) {String} name
 * @apiSuccess (200) {Array} images
 * @apiSuccess (200) {Number} price
 * @apiSuccess (200) {String} description
 * @apiSuccess (200) {String} product
*/
Router.route('/update-product/:id').post(
  Token.verifyToken,
  productController.updateProduct
)
/**
 * @api {GET} products/get-product/:id
 * @apiName GetDetailProduct
 * @apiGroup Products
 * * @apiSuccess (200) {String} name
 * @apiSuccess (200) {Array} images
 * @apiSuccess (200) {Number} price
 * @apiSuccess (200) {String} description
 * @apiSuccess (200) {String} product
*/
Router.route('/get-product/:id').get(
  Token.verifyToken,
  productController.getProduct
)

module.exports = Router
