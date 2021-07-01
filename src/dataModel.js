const mongoose = require('mongoose');

// Schema
const DataSchema = new mongoose.Schema({
  id: {type: String},
  mediaType: {type: String},
  title: {type: String},
  description: {type: String},
  source: {type: String},
  contentUrl: {type: String},
  previewUrl: {type: String},
});

module.exports = mongoose.model('Data', DataSchema);
