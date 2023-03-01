import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const JwtToken = await this.userService.create(user);
    res.status(statusCodes.CREATED).json({ token: JwtToken });
  };
}