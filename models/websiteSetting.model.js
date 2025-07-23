const mongoose = require('mongoose');

const websiteSettingSchema = new mongoose.Schema({
  websiteName: { type: String, required: true },
  contactEmail: { type: String },
  contactNumber: { type: String },
  address: { type: String },
  logoUrl: { type: String },
  faviconUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('WebsiteSetting', websiteSettingSchema);
