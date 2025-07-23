const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserRole', userRoleSchema);
