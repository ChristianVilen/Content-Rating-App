const mongoose = require('mongoose')

// Schema
const DataSchema = new mongoose.Schema({
  id: String,
  mediaType: String,
  title: String,
  description: String,
  source: String,
  contentUrl: String,
  previewUrl: String,
  review: {
    rating: String,
    reviewText: String,
  },
})

module.exports = mongoose.model('Data', DataSchema)
