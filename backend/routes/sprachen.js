const router = require('express').Router();
const {verifyTokenAndAdmin} = require('../middleware/verifyToken');
const {
    sprachenPost,
    sprachenPut,
    sprachenDelete,
    sprachenGet,
    sprachenGetAll,
} = require('../controller/sprachenController');

router.post('/', verifyTokenAndAdmin, sprachenPost);
router.put('/:id', verifyTokenAndAdmin, sprachenPut);
router.delete('/:id', verifyTokenAndAdmin, sprachenDelete);
router.get('/find/:id', sprachenGet);
router.get('/find/', sprachenGetAll);

module.exports = router;