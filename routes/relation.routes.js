const router = require('express').Router();
const {
  createRelation,
  getRelations,
  getRelationById,
  updateRelation,
  deleteRelation
} = require('../controllers/relation.controller');

const { verifyToken, adminOnly } = require('../middleware/auth');

router.post('/', verifyToken, adminOnly, createRelation);
router.get('/', verifyToken, getRelations);
router.get('/:id', verifyToken, getRelationById);
router.put('/:id', verifyToken, adminOnly, updateRelation);
router.delete('/:id', verifyToken, adminOnly, deleteRelation);

module.exports = router;
