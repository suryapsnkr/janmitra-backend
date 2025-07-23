const router = require('express').Router();
const {
  createPincode,
  getPincodes,
  getPincodeById,
  updatePincode,
  deletePincode
} = require('../controllers/pincode.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createPincode);
router.get('/', verifyToken, getPincodes);
router.get('/:id', verifyToken, getPincodeById);
router.put('/:id', verifyToken, adminOnly, updatePincode);
router.delete('/:id', verifyToken, adminOnly, deletePincode);

module.exports = router;
