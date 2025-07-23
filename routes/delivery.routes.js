const router = require('express').Router();
const { verifyToken } = require('../middleware/auth');
const ctrl = require('../controllers/delivery.controller');

router.post('/', verifyToken, ctrl.create);
router.get('/', verifyToken, ctrl.getAll);
router.put('/:id', verifyToken, ctrl.update);
router.delete('/:id', verifyToken, ctrl.remove);

module.exports = router;
