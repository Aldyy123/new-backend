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

schema.statics = {
  async checkedFindId (id) {
    if (!mongoose.isValidObjectId(id)) return []
    return this.findById(id)
  },
  async checkedUpdate (id, body) {
    if (!mongoose.isValidObjectId(id)) return { status: 'error', message: 'Id Not found', statusCode: 404 }
    return this.updateOne({ _id: id }, { body })
  }
}

module.exports = mongoose.model('Blogs', schema)
