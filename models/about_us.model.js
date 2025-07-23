const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  content: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('AboutUs', aboutSchema);
