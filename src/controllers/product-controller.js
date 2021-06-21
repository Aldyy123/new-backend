const ProductModel = require('../models/product-model')
const { handleError, handleSuccess } = require('../middlewares/errorHandle')

class ProductController {
  async listProducts (req, res) {
    const limit = parseInt(req.body.limit)
    const skip = parseInt(req.body.skip)
    const search = req.body.search
    const regex = new RegExp(search, 'gi')
    const type = req.body.type
    try {
      const products = await ProductModel.find({ name: regex })
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: 'desc' })
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
        handleError({ message: 'Product not found', statusCode: 404 }, res)
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
        res.json(404, { error: true, message: 'Product Already Exists' })
      } else {
        const product = await new ProductModel(req.body)
        const result = await product.save()
        res.json(result)
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
        handleError({ statusCode: 404, message: 'Product not found' }, res)
      }
    } catch (error) {
      handleError(error, res)
    }
  }
}

const productController = new ProductController()
module.exports = productController
