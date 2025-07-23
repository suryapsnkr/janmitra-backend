const router = require('express').Router();
const {
  createModule,
  getModules,
  getModuleById,
  updateModule,
  deleteModule
} = require('../controllers/module.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createModule);
router.get('/', verifyToken, getModules);
router.get('/:id', verifyToken, getModuleById);
router.put('/:id', verifyToken, adminOnly, updateModule);
router.delete('/:id', verifyToken, adminOnly, deleteModule);

module.exports = router;
