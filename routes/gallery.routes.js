const router = require('express').Router();
const {
  createGallery,
  getGalleries,
  getGalleryById,
  updateGallery,
  deleteGallery
} = require('../controllers/gallery.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createGallery);
router.get('/', getGalleries);
router.get('/:id', getGalleryById);
router.put('/:id', verifyToken, adminOnly, updateGallery);
router.delete('/:id', verifyToken, adminOnly, deleteGallery);

module.exports = router;
