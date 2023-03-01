import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const orderController = new OrderController();

const router = Router();

router.get('/orders', orderController.getAll);

export default router;