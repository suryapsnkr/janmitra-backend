const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String, required: true }, // URL or filename
  link: { type: String } // optional clickable link
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);
