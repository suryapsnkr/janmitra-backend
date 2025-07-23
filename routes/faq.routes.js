const router = require('express').Router();
const {
  createFAQ,
  getFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ
} = require('../controllers/faq.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.get('/', getFAQs);
router.get('/:id', getFAQById);
router.post('/', verifyToken, adminOnly, createFAQ);
router.put('/:id', verifyToken, adminOnly, updateFAQ);
router.delete('/:id', verifyToken, adminOnly, deleteFAQ);

module.exports = router;
