const SocialLink = require('../models/socialLink.model');

// ➕ Create
exports.createSocialLink = async (req, res) => {
  try {
    const link = new SocialLink(req.body);
    await link.save();
    res.status(201).json(link);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Get All
exports.getSocialLinks = async (req, res) => {
  try {
    const links = await SocialLink.find();
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get One
exports.getSocialLinkById = async (req, res) => {
  try {
    const link = await SocialLink.findById(req.params.id);
    if (!link) return res.status(404).json({ message: 'Social link not found' });
    res.json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updateSocialLink = async (req, res) => {
  try {
    const link = await SocialLink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!link) return res.status(404).json({ message: 'Social link not found' });
    res.json(link);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deleteSocialLink = async (req, res) => {
  try {
    const link = await SocialLink.findByIdAndDelete(req.params.id);
    if (!link) return res.status(404).json({ message: 'Social link not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
