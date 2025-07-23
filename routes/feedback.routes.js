const router = require('express').Router();
const {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  deleteFeedback
} = require('../controllers/feedback.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', createFeedback); // Public
router.get('/', verifyToken, adminOnly, getFeedbacks);
router.get('/:id', verifyToken, adminOnly, getFeedbackById);
router.delete('/:id', verifyToken, adminOnly, deleteFeedback);

module.exports = router;
