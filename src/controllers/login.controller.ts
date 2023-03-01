import { Response, Request } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public getUser = async (req: Request, res: Response) => {
    try {
      const token = await this.loginService.getUser(req.body);
      
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Username or password invalid' });
    }
  };
}