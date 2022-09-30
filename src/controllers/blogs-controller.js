const Blogs = require('../models/blogs-model')
const { handleError, handleSuccess } = require('../middlewares/errorHandle')

const blogsCreate = async (req, res) => {
  try {
    if (req.body.title && Object.keys(req.body).length > 0) {
      const exist = await Blogs.exists({ title: req.body.title })
      if (exist) {
        handleError(
          { statusCode: 401, message: 'Title already exists' },
          res
        )
        return false
      } else {
        const dataBlog = {
          title: req.body.title,
          link: req.body.title.split(' ').join('-'),
          image: req.body.image,
          author: req.body.author,
          description: req.body.description
        }
        const blog = await new Blogs(dataBlog)
        const result = await blog.save()
        handleSuccess(result, res)
      }
    } else {
      handleError(
        { statusCode: 401, message: 'Maaf filled harus di isi' },
        res
      )
    }
  } catch (error) {
    handleError(error, res)
  }
}

const blogView = async (req, res) => {
  try {
    const blog = await Blogs.find()
    console.log(blog)
    if (blog.length <= 0) {
      handleError({ statusCode: 404, message: 'Blog not found' }, res)
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
      handleError({ message: 'Blog Not found', statusCode: 404 }, res)
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
