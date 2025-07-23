const mongoose = require('mongoose');

const unitMasterSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('UnitMaster', unitMasterSchema);
