import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import VerifyJwt from '../services/JWT/VerifyJwt';
import productIdMiddlewarer from '../Middlewares/productIdMiddlewarer';

const orderController = new OrderController();
const verifyJwt = new VerifyJwt();

const router = Router();

router.get('/orders', orderController.getAll);
router.post('/orders', verifyJwt.verify, productIdMiddlewarer, orderController.create);

export default router;