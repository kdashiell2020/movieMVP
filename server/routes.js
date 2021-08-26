const router = require('express').Router();
const ctrl = require('../controllers/controllers');


router.get('/cocktails', ctrl.getAll);
router.get('/search/:ingredient', ctrl.search);
router.post('/user', ctrl.create);

module.exports = router;
