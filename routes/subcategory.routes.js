const router = require('express').Router();
const {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
  updateSubcategory,
  deleteSubcategory
} = require('../controllers/subcategory.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createSubcategory);
router.get('/', getSubcategories);
router.get('/:id', getSubcategoryById);
router.put('/:id', verifyToken, adminOnly, updateSubcategory);
router.delete('/:id', verifyToken, adminOnly, deleteSubcategory);

module.exports = router;
