const UserRole = require('../models/user_role.model');

// Create a new user-role mapping
exports.createUserRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    const userRole = new UserRole({ userId, roleId });
    await userRole.save();
    res.status(201).json(userRole);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user-role', error: err.message });
  }
};

// Get all user-role mappings
exports.getAllUserRoles = async (req, res) => {
  try {
    const userRoles = await UserRole.find().populate('userId', 'name mobile').populate('roleId', 'name');
    res.json(userRoles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user-roles', error: err.message });
  }
};

// Get user roles by userId
exports.getUserRoleById = async (req, res) => {
  try {
    const userRoles = await UserRole.find({ userId: req.params.userId }).populate('roleId', 'name');
    res.json(userRoles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching roles for user', error: err.message });
  }
};

// Update user-role mapping
exports.updateUserRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    const updated = await UserRole.findByIdAndUpdate(
      req.params.id,
      { userId, roleId },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'User-role not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user-role', error: err.message });
  }
};

// Delete user-role mapping
exports.deleteUserRole = async (req, res) => {
  try {
    await UserRole.findByIdAndDelete(req.params.id);
    res.json({ message: 'User-role deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user-role', error: err.message });
  }
};
