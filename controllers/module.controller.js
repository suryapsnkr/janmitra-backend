const Module = require('../models/module.model');

// Create
exports.createModule = async (req, res) => {
  try {
    const mod = new Module(req.body);
    await mod.save();
    res.status(201).json(mod);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
exports.getModuleById = async (req, res) => {
  try {
    const mod = await Module.findById(req.params.id);
    if (!mod) return res.status(404).json({ message: 'Module not found' });
    res.json(mod);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateModule = async (req, res) => {
  try {
    const mod = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mod) return res.status(404).json({ message: 'Module not found' });
    res.json(mod);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteModule = async (req, res) => {
  try {
    const mod = await Module.findByIdAndDelete(req.params.id);
    if (!mod) return res.status(404).json({ message: 'Module not found' });
    res.json({ message: 'Module deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
