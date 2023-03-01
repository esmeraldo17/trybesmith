import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { Login } from '../interfaces/login.interface';

const schema = (user: Login) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(user);

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};

export default validateLogin;