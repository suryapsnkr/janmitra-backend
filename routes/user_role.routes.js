const router = require('express').Router();
const {
  createUserRole,
  getAllUserRoles,
  getUserRoleById,
  updateUserRole,
  deleteUserRole
} = require('../controllers/user_role.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createUserRole);
router.get('/', verifyToken, adminOnly, getAllUserRoles);
router.get('/:id', verifyToken, adminOnly, getUserRoleById);
router.put('/:id', verifyToken, adminOnly, updateUserRole);
router.delete('/:id', verifyToken, adminOnly, deleteUserRole);

module.exports = router;
