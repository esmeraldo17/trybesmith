import { Pool, RowDataPacket } from 'mysql2/promise';
import { Login, LoginPayload } from '../interfaces/login.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUser(user: Login): Promise<LoginPayload> {
    const [[result]] = await this.connection.execute<RowDataPacket[] & LoginPayload>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [user.username, user.password],
    );

    return result as LoginPayload;
  }
}