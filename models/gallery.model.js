const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // Image URL or filename
  description: { type: String },
  uploadedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
