const router = require('express').Router();
const { verifyToken, adminOnly } = require('../middleware/auth');
const {
  createMultiprice,
  getAllMultiprices,
  updateMultiprice,
  deleteMultiprice
} = require('../controllers/multiprice.controller');

router.post('/', verifyToken, adminOnly, createMultiprice);
router.get('/', getAllMultiprices);
router.put('/:id', verifyToken, adminOnly, updateMultiprice);
router.delete('/:id', verifyToken, adminOnly, deleteMultiprice);

module.exports = router;
