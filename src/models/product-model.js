const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    images: String,
    price: Number,
    description: String,
    product: {
      type: String,
      enum: ['games', 'invitation'],
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Product', schema)
