const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    images: Array,
    price: Number,
    description: String,
    product: {
      type: String,
      enum: ['games', 'printing', 'atk'],
      required: true
    }
  },
  {
    timestamps: true
  }
)

schema.statics = {
  async checkedFindId (id) {
    if (!mongoose.isValidObjectId(id)) return []
    return this.findById(id)
  }
}

module.exports = mongoose.model('Product', schema)
