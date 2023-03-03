import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import JwtGenerator from './JWT/JwtGenerator';

type UserName = {
  username: string,
};

type UserId = {
  id: number,
};

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

  public async getIdByUsername(name: UserName): Promise<UserId> {
    try {
      const id = await this.model.getIdByUsername(name);
      return { id };
    } catch (error) {
      throw new Error(`Usuário '${name}' não encontrado.`);
    }
  }
}