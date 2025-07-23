const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 } // optional rating
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
