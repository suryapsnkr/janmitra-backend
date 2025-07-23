const router = require('express').Router();
const { verifyToken, adminOnly } = require('../middleware/auth');
const ctrl = require('../controllers/firm.controller');

router.post('/', verifyToken, adminOnly, ctrl.create);
router.get('/', ctrl.getAll);
router.put('/:id', verifyToken, adminOnly, ctrl.update);
router.delete('/:id', verifyToken, adminOnly, ctrl.remove);

module.exports = router;
