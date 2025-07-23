const router = require('express').Router();
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require('../controllers/category.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.put('/:id', verifyToken, adminOnly, updateCategory);
router.delete('/:id', verifyToken, adminOnly, deleteCategory);

module.exports = router;
