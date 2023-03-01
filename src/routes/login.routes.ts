import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../Middlewares/loginMiddleware';

const router = Router();

const loginController = new LoginController();

router.post('/login', validateLogin, loginController.getUser);

export default router;
