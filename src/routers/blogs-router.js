const { blogsCreate, blogView, blogDetail, blogUpdate } = require('../controllers/blogs-controller')
const router = require('express').Router()
const token = require('../middlewares/token')

router.route('/create').post(token.verifyToken, blogsCreate)
router.route('/').get(blogView)
router.route('/detail/:id').get(blogDetail)
router.route('/update/:id').put(token.verifyToken, blogUpdate)
module.exports = router
