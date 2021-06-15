const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { ErrorHandler } = require('../middlewares/errorHandle')

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username harus diisi'],
    unique: true
  },
  firstname: String,
  lastname: String,
  password: {
    type: String,
    min: [8, 'Password harus minimal {VALUE}'],
    required: [true, 'Password harus diisi']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email harus diisi']
  }
})

schema.pre('save', async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
  } catch (error) {
    console.log(error)
  }
})

schema.statics = {
  async loginUser ({ email, password }) {
    const user = await this.findOne({ email })
    const compare = await bcrypt.compare(password, user.password)
    if (compare) {
      return user
    } else {
      return new ErrorHandler(404, 'User Not found')
    }
  }
}

module.exports = mongoose.model('User', schema)
