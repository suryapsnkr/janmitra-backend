const router = require('express').Router();
const {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember
} = require('../controllers/member.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createMember);
router.get('/', verifyToken, getMembers);
router.get('/:id', verifyToken, getMemberById);
router.put('/:id', verifyToken, adminOnly, updateMember);
router.delete('/:id', verifyToken, adminOnly, deleteMember);

module.exports = router;
