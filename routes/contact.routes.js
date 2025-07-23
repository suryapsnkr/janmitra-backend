const router = require('express').Router();
const {
  createContact,
  getContacts,
  getContactById,
  deleteContact
} = require('../controllers/contact.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', createContact); // Public contact form
router.get('/', verifyToken, adminOnly, getContacts); // Admin-only
router.get('/:id', verifyToken, adminOnly, getContactById); // Admin-only
router.delete('/:id', verifyToken, adminOnly, deleteContact); // Admin-only

module.exports = router;
