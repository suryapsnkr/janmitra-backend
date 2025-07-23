const Relation = require('../models/relation.model');

// ➕ Create
exports.createRelation = async (req, res) => {
  try {
    const relation = new Relation(req.body);
    await relation.save();
    res.status(201).json(relation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Get All
exports.getRelations = async (req, res) => {
  try {
    const relations = await Relation.find();
    res.json(relations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get by ID
exports.getRelationById = async (req, res) => {
  try {
    const relation = await Relation.findById(req.params.id);
    if (!relation) return res.status(404).json({ message: 'Relation not found' });
    res.json(relation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updateRelation = async (req, res) => {
  try {
    const relation = await Relation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!relation) return res.status(404).json({ message: 'Relation not found' });
    res.json(relation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deleteRelation = async (req, res) => {
  try {
    const relation = await Relation.findByIdAndDelete(req.params.id);
    if (!relation) return res.status(404).json({ message: 'Relation not found' });
    res.json({ message: 'Relation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
