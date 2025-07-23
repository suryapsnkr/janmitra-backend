const router = require('express').Router();
const {
  createQualification,
  getQualifications,
  getQualificationById,
  updateQualification,
  deleteQualification
} = require('../controllers/qualification.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createQualification);
router.get('/', verifyToken, getQualifications);
router.get('/:id', verifyToken, getQualificationById);
router.put('/:id', verifyToken, adminOnly, updateQualification);
router.delete('/:id', verifyToken, adminOnly, deleteQualification);

module.exports = router;
