import  {Router} from 'express';
import {deleteFinance, getFinances, postFinance, updateFinance} from '../controllers/finance.controller.js';

const router = Router();


router.get('/', getFinances);
router.post('/finance', postFinance);
router.put('/finance/:id', updateFinance);
router.delete('/finance/:id', deleteFinance);


export default router;