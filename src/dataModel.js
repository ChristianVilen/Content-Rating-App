const mongoose = require('mongoose')

// Schema
const DataSchema = new mongoose.Schema({
  id: String,
  mediaType: String,
  source: String,
  title: String,
  description: String,
  length: String,
  aspectRatio: String,
  topic: String,
  contentUrl: String,
  previewUrl: String,
  review: {
    rating: Number,
    reviewText: String,
  },
})

module.exports = mongoose.model('Data', DataSchema)
