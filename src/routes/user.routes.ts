import { Router } from 'express';
import UserController from '../controllers/user.controller';
import levelMiddlewarer from '../Middlewares/levelMiddlewarer';
import passwordMiddlewarer from '../Middlewares/passwordMiddlewarer';
import usernameMiddlewarer from '../Middlewares/usernameMiddlewarer';
import vocationMiddlewarer from '../Middlewares/vocationMiddlewarer';

const userController = new UserController();

const router = Router();

router.post(
  '/users',
  usernameMiddlewarer,
  vocationMiddlewarer,
  levelMiddlewarer,
  passwordMiddlewarer,
  userController.create,
);

export default router;