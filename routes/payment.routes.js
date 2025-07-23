const router = require('express').Router();
const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment
} = require('../controllers/payment.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createPayment);
router.get('/', verifyToken, adminOnly, getPayments);
router.get('/:id', verifyToken, getPaymentById);
router.put('/:id', verifyToken, adminOnly, updatePayment);
router.delete('/:id', verifyToken, adminOnly, deletePayment);

module.exports = router;
