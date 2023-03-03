import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserService from '../user.service';

type Data = {
  data: { username: string },
  iat?: number,
};

type ReqUser = {
  user?: { id: number }
};

dotenv.config();

export default class VerifyJwt {
  constructor(private userService = new UserService()) {}

  public verify = async (req: Request & ReqUser, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as Data;
    
      const { username } = decoded.data;
  
      const id = await this.userService.getIdByUsername(username);

      req.user = id;
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next();
  };
}
