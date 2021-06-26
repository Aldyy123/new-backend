const { blogsCreate, blogView, blogDetail, blogUpdate } = require('../controllers/blogs-controller')
const router = require('express').Router()
const token = require('../middlewares/token')

router.route('/create').post(token.verifyToken, blogsCreate)
router.route('/').get(token.verifyToken, blogView)
router.route('/detail/:id').get(token.verifyToken, blogDetail)
router.route('/update/:id').post(token.verifyToken, blogUpdate)
module.exports = router
