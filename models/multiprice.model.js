const mongoose = require('mongoose');

const multipriceSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  unit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UnitMaster', required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Multiprice', multipriceSchema);
