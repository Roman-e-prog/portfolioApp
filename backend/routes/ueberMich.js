const router = require('express').Router();
const {verifyTokenAndAdmin} = require('../middleware/verifyToken');
const {
    ueberMichPost,
    ueberMichPut,
    ueberMichDelete,
    ueberMichGet,
    ueberMichGetAll,
} = require('../controller/ueberMichController');

router.post('/', verifyTokenAndAdmin, ueberMichPost);
router.put('/:id', verifyTokenAndAdmin, ueberMichPut);
router.delete('/:id', verifyTokenAndAdmin, ueberMichDelete);
router.get('/find/:id', ueberMichGet);
router.get('/find/', ueberMichGetAll);

module.exports = router;