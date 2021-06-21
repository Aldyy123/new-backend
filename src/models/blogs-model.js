const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    author: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Blogs', schema)
