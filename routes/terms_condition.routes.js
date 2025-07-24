const router = require('express').Router();
const {
  getTerms,
  upsertTerms
} = require('../controllers/terms_condition.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.get('/', getTerms);
router.post('/', verifyToken, adminOnly, upsertTerms); // Create or Update

module.exports = router;
