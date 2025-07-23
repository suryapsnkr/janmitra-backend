const UserRole = require('../models/user_role.model');

exports.createUserRole = async (req, res) => {
  try {
    const role = new UserRole(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserRoles = async (req, res) => {
  try {
    const roles = await UserRole.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserRoleById = async (req, res) => {
  try {
    const role = await UserRole.findById(req.params.id);
    if (!role) return res.status(404).json({ message: 'User role not found' });
    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const role = await UserRole.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!role) return res.status(404).json({ message: 'User role not found' });
    res.json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUserRole = async (req, res) => {
  try {
    const role = await UserRole.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ message: 'User role not found' });
    res.json({ message: 'User role deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

