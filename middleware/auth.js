const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};
