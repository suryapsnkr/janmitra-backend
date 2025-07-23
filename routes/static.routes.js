const router = require('express').Router();
const { verifyToken, adminOnly } = require('../middleware/auth');
const ctrl = require('../controllers/static_content.controller');

// Terms & Conditions
router.get('/terms', ctrl.getTerms);
router.put('/terms', verifyToken, adminOnly, ctrl.updateTerms);

// Privacy Policy
router.get('/privacy', ctrl.getPrivacy);
router.put('/privacy', verifyToken, adminOnly, ctrl.updatePrivacy);

// About Us
router.get('/about', ctrl.getAbout);
router.put('/about', verifyToken, adminOnly, ctrl.updateAbout);

// Website Info
router.get('/website-info', ctrl.getWebsiteInfo);
router.put('/website-info', verifyToken, adminOnly, ctrl.updateWebsiteInfo);

module.exports = router;
