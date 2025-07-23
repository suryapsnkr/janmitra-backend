const ModulePermission = require('../models/module_permission.model');

// ➕ Create
exports.createPermission = async (req, res) => {
  try {
    const permission = new ModulePermission(req.body);
    await permission.save();
    res.status(201).json(permission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Read All
exports.getPermissions = async (req, res) => {
  try {
    const permissions = await ModulePermission.find()
      .populate('moduleId', 'moduleName')
      .populate('roleId', 'name');
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Read One
exports.getPermissionById = async (req, res) => {
  try {
    const permission = await ModulePermission.findById(req.params.id)
      .populate('moduleId', 'moduleName')
      .populate('roleId', 'name');
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.json(permission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updatePermission = async (req, res) => {
  try {
    const permission = await ModulePermission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.json(permission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deletePermission = async (req, res) => {
  try {
    const permission = await ModulePermission.findByIdAndDelete(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.json({ message: 'Permission deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
