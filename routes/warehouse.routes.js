const router = require('express').Router();
const { verifyToken, adminOnly } = require('../middleware/auth');
const {
  createWarehouse,
  getAllWarehouses,
  updateWarehouse,
  deleteWarehouse
} = require('../controllers/warehouse.controller');

router.post('/', verifyToken, adminOnly, createWarehouse);
router.get('/', getAllWarehouses);
router.put('/:id', verifyToken, adminOnly, updateWarehouse);
router.delete('/:id', verifyToken, adminOnly, deleteWarehouse);

module.exports = router;
