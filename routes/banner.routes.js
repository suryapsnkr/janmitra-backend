const router = require('express').Router();
const {
  createBanner,
  getBanners,
  getBannerById,
  updateBanner,
  deleteBanner
} = require('../controllers/banner.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.get('/', getBanners);
router.get('/:id', getBannerById);
router.post('/', verifyToken, adminOnly, createBanner);
router.put('/:id', verifyToken, adminOnly, updateBanner);
router.delete('/:id', verifyToken, adminOnly, deleteBanner);

module.exports = router;
