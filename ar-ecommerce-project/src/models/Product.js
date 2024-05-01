const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  imageSrc: Buffer,
  model: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Product', productSchema);
