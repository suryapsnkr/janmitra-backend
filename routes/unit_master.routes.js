const router = require('express').Router();
const { verifyToken, adminOnly } = require('../middleware/auth');
const {
  createUnit,
  getAllUnits,
  updateUnit,
  deleteUnit
} = require('../controllers/unit_master.controller');

router.post('/', verifyToken, adminOnly, createUnit);
router.get('/', getAllUnits);
router.put('/:id', verifyToken, adminOnly, updateUnit);
router.delete('/:id', verifyToken, adminOnly, deleteUnit);

module.exports = router;
