const router = require('express').Router();
const {
  createSetting,
  getSetting,
  updateSetting
} = require('../controllers/websiteSetting.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createSetting);
router.get('/', getSetting); // Public view
router.put('/', verifyToken, adminOnly, updateSetting);

module.exports = router;
