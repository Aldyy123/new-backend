const ProductModel = require('../models/product-model')
const { handleError, handleSuccess } = require('../middlewares/errorHandle')
const { sortBy } = require('../utils/utlis')

class ProductController {
  async listProducts (req, res) {
    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)
    const search = req.query.search
    const regex = new RegExp(search, 'gi')
    const type = req.query.type
    const sort = sortBy(req.query.sort)
    try {
      const products = await ProductModel.find({ name: regex })
        .limit(limit)
        .skip(skip)
        .sort(sort)
        .where('product', type)
      if (products.length <= 0) {
        handleError({ statusCode: 404, message: 'Product not found' }, res)
      } else {
        handleSuccess(products, res)
      }
    } catch (error) {
      handleError(error, res)
    }
  }

  async getProduct (req, res) {
    const { id } = req.params
    try {
      const product = await ProductModel.checkedFindId(id)
      if (product.length < 1) {
        handleError({ message: 'Product not found', statusCode: 200 }, res)
      } else {
        handleSuccess(product, res)
      }
    } catch (error) {
      handleError(error, res)
    }
  }

  async saveProduct (req, res) {
    try {
      const exist = await ProductModel.exists({ name: req.body.name })
      if (exist) {
        handleError({ error: true, message: 'Product Already Exists' }, res)
      } else {
        const product = await new ProductModel(req.body)
        const result = await product.save()
        handleSuccess(result, res)
      }
    } catch (error) {
      handleError(error, res)
    }
  }

  async updateProduct (req, res) {
    const { id } = req.params.id
    const body = req.body
    try {
      const exist = await ProductModel.exists({ name: req.body.name })
      if (exist) {
        const update = await ProductModel.updateOne({ _id: id }, { body })
        handleSuccess(update, res)
      } else {
        handleError({ statusCode: 200, message: 'Product not found' }, res)
      }
    } catch (error) {
      handleError(error, res)
    }
  }
}

const productController = new ProductController()
module.exports = productController
