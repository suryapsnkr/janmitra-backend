const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
  firmName: { type: String, required: true },
  directorName: { type: String },
  mobile: { type: String },
  image: { type: String },
  pincodes: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Firm', firmSchema);
