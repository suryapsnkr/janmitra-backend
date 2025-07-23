const User = require('../models/user.model');

// ➕ Create
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('roleId', 'name');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 By ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('roleId', 'name');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;

    // Re-hash password if updated
    if (updates.password) {
      const salt = await require('bcryptjs').genSalt(10);
      updates.password = await require('bcryptjs').hash(updates.password, salt);
    }

    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
