const express = require('express')
const Router = express.Router()
const productController = require('../controllers/product-controller')
const Token = require('../middlewares/token')

/**
 * @api {get} /products/ Products Arsy
 * @apiName GetProducts
 * @apiDefine AccessAllProducts
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       Authorization: "Bearer: skdjnbfkdksfkjdfnsdjf43587947398"
 *     }
 * @apiGroup Products
 * @apiSuccess (200) {String} name
 * @apiSuccess (200) {String[]} images
 * @apiSuccess (200) {Number} price
 * @apiSuccess (200) {String} description
 * @apiSuccess (200) {String} product
 */
Router.get('/', Token.verifyToken, productController.listProducts)

Router.route('/add-product').post(
  Token.verifyToken,
  productController.saveProduct
)
Router.route('/update-product/:id').post(
  Token.verifyToken,
  productController.updateProduct
)
Router.route('/get-product/:id').get(
  Token.verifyToken,
  productController.getProduct
)

module.exports = Router
