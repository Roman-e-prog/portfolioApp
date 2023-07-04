const router = require('express').Router();
const {verifyTokenAndAdmin} = require('../middleware/verifyToken');
const {
    referenzenPost,
    referenzenPut,
    referenzenDelete,
    referenzenGet,
    referenzenGetAll,
} = require('../controller/referencesController');

router.post('/', verifyTokenAndAdmin, referenzenPost);
router.put('/:id', verifyTokenAndAdmin, referenzenPut);
router.delete('/:id', verifyTokenAndAdmin, referenzenDelete);
router.get('/find/:id', referenzenGet);
router.get('/find/', referenzenGetAll);

module.exports = router;