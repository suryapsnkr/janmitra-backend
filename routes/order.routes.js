const router = require('express').Router();
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} = require('../controllers/order.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, createOrder); // Can be placed behind adminOnly if needed
router.get('/', verifyToken, adminOnly, getOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id', verifyToken, adminOnly, updateOrder);
router.delete('/:id', verifyToken, adminOnly, deleteOrder);

module.exports = router;
