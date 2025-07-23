const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Subcategory', subcategorySchema);
