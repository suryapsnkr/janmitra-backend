const Subcategory = require('../models/subcategory.model');

// ➕ Create
exports.createSubcategory = async (req, res) => {
  try {
    const subcategory = new Subcategory(req.body);
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Get All
exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate('categoryId', 'name');
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get by ID
exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id).populate('categoryId', 'name');
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(subcategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updateSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(subcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deleteSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.findByIdAndDelete(req.params.id);
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json({ message: 'Subcategory deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
