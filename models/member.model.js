const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dob: { type: Date, required: true },
  qualificationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Qualification', required: true },
  relationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Relation', required: true },
  pincodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pincode', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
