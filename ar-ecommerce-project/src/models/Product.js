const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  imageSrc: {
    data: Buffer,
    contentType: String
  },
  model: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
