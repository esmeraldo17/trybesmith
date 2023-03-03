import { Pool, ResultSetHeader, RowDataPacket, OkPacket } from 'mysql2/promise';
import User from '../interfaces/user.interface';

type ResultType = { id: number }[] & (
  ResultSetHeader | RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[]
);

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
      [username, vocation, level, password],
    );

    const { insertId } = result;
    return { id: insertId, ...user };
  }

  public async getIdByUsername(name: string): Promise<number> {
    const [rows] = await this.connection.execute<ResultType>(
      'SELECT id FROM Trybesmith.users WHERE username = (?)',
      [name],
    );

    if (rows.length === 0) {
      throw new Error(`Usuário '${name}' não encontrado.`);
    }
    const { id } = rows[0];

    console.log(id);

    return id;
  }
}