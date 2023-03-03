import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import VerifyJwt from '../services/JWT/VerifyJwt';

const orderController = new OrderController();
const verifyJwt = new VerifyJwt();

const router = Router();

router.get('/orders', orderController.getAll);
router.post('/orders', verifyJwt.verify);

export default router;