const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.login = async (req, res, next) => {
  try {
    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile }).populate('roleId', 'name');

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.roleId?.name || 'User' // Embed role name in token
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        mobile: user.mobile,
        roleId: user.roleId // includes _id and name
      }
    });
  } catch (err) {
    console.error('Login Error:', err.message);
    next(err);
  }
};
