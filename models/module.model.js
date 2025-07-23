const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  moduleName: { type: String, required: true },
  controllerName: { type: String },
  iconName: { type: String },
  operations: { type: [String] }, // array of strings like ['add', 'edit', 'view']
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Module', moduleSchema);
