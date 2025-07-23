const router = require('express').Router();
const {
  getPolicy,
  updatePolicy
} = require('../controllers/privacyPolicy.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.get('/', getPolicy); // Public
router.put('/', verifyToken, adminOnly, updatePolicy); // Admin only

module.exports = router;
