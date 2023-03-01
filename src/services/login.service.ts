import connection from '../models/connection';
import LoginModel from '../models/login.nodel';
import { Login, LoginPayload } from '../interfaces/login.interface';
import JwtGenerator from './JWT/JwtGenerator';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getUser(user: Login): Promise<string | LoginPayload> {
    try {
      const result = await this.model.getUser(user);
      if (!result) throw new Error();
      const { username } = user;
      const payload = { username };
      const JwtToken = JwtGenerator(payload);
      return JwtToken;
    } catch (error) {
      throw new Error('Username or password invalid');
    }
  }
}