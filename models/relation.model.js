const mongoose = require('mongoose');

const relationSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Relation', relationSchema);
