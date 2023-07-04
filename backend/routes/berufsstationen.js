const router = require('express').Router();
const {verifyTokenAndAdmin} = require('../middleware/verifyToken');
const {
    berufsstationenPost,
    berufsstationenPut,
    berufsstationenDelete,
    berufsstationenGet,
    berufsstationenGetAll,
} = require('../controller/berufsstationenController');

router.post('/', verifyTokenAndAdmin, berufsstationenPost);
router.put('/:id', verifyTokenAndAdmin, berufsstationenPut);
router.delete('/:id', verifyTokenAndAdmin, berufsstationenDelete);
router.get('/find/:id', berufsstationenGet);
router.get('/find/', berufsstationenGetAll);

module.exports = router;