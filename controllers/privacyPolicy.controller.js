const PrivacyPolicy = require('../models/privacyPolicy.model');

// Create or update
exports.updatePolicy = async (req, res) => {
  try {
    const policy = await PrivacyPolicy.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true
    });
    res.json(policy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get
exports.getPolicy = async (req, res) => {
  try {
    const policy = await PrivacyPolicy.findOne();
    res.json(policy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
