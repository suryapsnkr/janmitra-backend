const Gallery = require('../models/gallery.model');

// ➕ Create
exports.createGallery = async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    await gallery.save();
    res.status(201).json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Get All
exports.getGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.json(galleries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get by ID
exports.getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
    res.json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
    res.json({ message: 'Gallery deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
