const {Router} = require('express');
const {getFinances, createFinance, deleteFinance, updateFinance} = require( '../controllers/finance.controller.js');

const router = Router();



router.get('/finance', getFinances);
router.post('/finance', createFinance);


module.exports = router;