const router = require('express').Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', verifyToken, adminOnly, updateProduct);
router.delete('/:id', verifyToken, adminOnly, deleteProduct);

module.exports = router;
