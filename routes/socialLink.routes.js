const router = require('express').Router();
const {
  createSocialLink,
  getSocialLinks,
  getSocialLinkById,
  updateSocialLink,
  deleteSocialLink
} = require('../controllers/socialLink.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.get('/', getSocialLinks);
router.get('/:id', getSocialLinkById);
router.post('/', verifyToken, adminOnly, createSocialLink);
router.put('/:id', verifyToken, adminOnly, updateSocialLink);
router.delete('/:id', verifyToken, adminOnly, deleteSocialLink);

module.exports = router;
