const ProductModel = require('../models/product-model')
const { ErrorHandler } = require('../middlewares/errorHandle')

class ProductController {
  async listProducts (req, res) {
    try {
      const products = await ProductModel.find().limit(20)
      res.json(products)
    } catch (error) {
      res.json(new ErrorHandler(404, error.message))
    }
  }

  async getProduct (req, res) {
    const { name } = req.body
    try {
      const product = await ProductModel.find({ name: name })
      if (product.length < 1) {
        res.json(404, { error: 'Product not found' })
      } else {
        res.json(product)
      }
    } catch (error) {
      throw new ErrorHandler(404, error.message)
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
      throw new ErrorHandler(404, error.message)
    }
  }

  async updateProduct (req, res) {
    const { id } = req.params.id
    const body = req.body
    try {
      const exist = await ProductModel.exists({ name: req.body.name })
      if (exist) {
        res.status(404)
        res.json({ error: true, message: 'Product Already Exists' })
      } else {
        const update = await ProductModel.updateOne({ _id: id }, { body })
        res.json(update)
      }
    } catch (error) {
      throw new ErrorHandler(404, error.message)
    }
  }
}

const productController = new ProductController()
module.exports = productController
