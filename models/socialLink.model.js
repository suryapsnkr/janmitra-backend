const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true }, // e.g. Facebook, Twitter
  url: { type: String, required: true },
  icon: { type: String } // optional icon name or URL
}, { timestamps: true });

module.exports = mongoose.model('SocialLink', socialLinkSchema);
