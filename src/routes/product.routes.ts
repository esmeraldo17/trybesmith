import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productsController = new ProductController();

const router = Router();

router.post('/products', productsController.create);

export default router;