const router = require('express').Router();
const {
  createPermission,
  getPermissions,
  getPermissionById,
  updatePermission,
  deletePermission
} = require('../controllers/module_permission.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createPermission);
router.get('/', verifyToken, getPermissions);
router.get('/:id', verifyToken, getPermissionById);
router.put('/:id', verifyToken, adminOnly, updatePermission);
router.delete('/:id', verifyToken, adminOnly, deletePermission);

module.exports = router;
