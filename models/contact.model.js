const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String },
  email: { type: String },
  message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
