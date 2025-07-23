const router = require('express').Router();
const {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole
} = require('../controllers/role.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createRole);
router.get('/', verifyToken, adminOnly, getRoles);
router.get('/:id', verifyToken, adminOnly, getRoleById);
router.put('/:id', verifyToken, adminOnly, updateRole);
router.delete('/:id', verifyToken, adminOnly, deleteRole);

module.exports = router;
