import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userController = new UserController();

const router = Router();

router.post('/users', userController.create);

export default router;