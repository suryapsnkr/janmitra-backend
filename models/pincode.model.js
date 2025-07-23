const mongoose = require('mongoose');

const pincodeSchema = new mongoose.Schema({
  pincode: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  state: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pincode', pincodeSchema);
