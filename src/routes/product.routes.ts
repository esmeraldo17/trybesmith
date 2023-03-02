import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import nameMiddlewarer from '../Middlewares/nameMiddlewarer';
import amountMiddlewarer from '../Middlewares/amountMiddlewarer';

const productsController = new ProductController();

const router = Router();

router.get('/products', productsController.getAll);
router.post(
  '/products',
  nameMiddlewarer,
  amountMiddlewarer,
  productsController.create,
);

export default router;