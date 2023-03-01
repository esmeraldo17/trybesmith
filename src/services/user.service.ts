import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import JwtGenerator from './JWT/JwtGenerator';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const { username } = await this.model.create(user);
    const payload = { username };
    const JwtToken = JwtGenerator(payload);
    return JwtToken;
  }
}