const Blogs = require('../models/blogs-model')
const { handleError, handleSuccess } = require('../middlewares/errorHandle')

const blogsCreate = async (req, res) => {
  try {
    const exist = await Blogs.exists({ title: req.body.title })
    if (exist) {
      handleError(
        { statusCode: 404, message: 'Title Name already exists' },
        res
      )
    } else {
      const blog = await new Blogs(req.body)
      const result = await blog.save()
      handleSuccess(result, res)
    }
  } catch (error) {
    handleError(error, res)
  }
}

const blogView = async (req, res) => {
  try {
    const blog = await Blogs.find()
    if (blog.length <= 0) {
      handleError({ statusCode: 404, message: 'Product not found' }, res)
    } else {
      handleSuccess(blog, res)
    }
  } catch (error) {
    handleError(error, res)
  }
}

const blogDetail = async (req, res) => {
  try {
    const blog = await Blogs.checkedFindId(req.params.id)
    if (blog < 1) {
      handleError({ message: 'Blogs Not found', statusCode: 404 }, res)
    } else {
      handleSuccess(blog, res)
    }
  } catch (error) {
    handleError(error, res)
  }
}

const blogUpdate = async (req, res) => {
  try {
    const blog = await Blogs.checkedUpdate(req.params.id, req.body)
    if (blog.status === undefined) {
      handleSuccess(blog, res)
    } else {
      handleError(blog, res)
    }
  } catch (error) {
    handleError(error, res)
  }
}

module.exports = { blogsCreate, blogView, blogDetail, blogUpdate }
