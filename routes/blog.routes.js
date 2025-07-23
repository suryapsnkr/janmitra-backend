const router = require('express').Router();
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blog.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.put('/:id', verifyToken, adminOnly, updateBlog);
router.delete('/:id', verifyToken, adminOnly, deleteBlog);

module.exports = router;
