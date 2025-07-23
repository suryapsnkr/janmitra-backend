const router = require('express').Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createUser);
router.get('/', verifyToken, adminOnly, getUsers);
router.get('/:id', verifyToken, adminOnly, getUserById);
router.put('/:id', verifyToken, adminOnly, updateUser);
router.delete('/:id', verifyToken, adminOnly, deleteUser);

module.exports = router;
