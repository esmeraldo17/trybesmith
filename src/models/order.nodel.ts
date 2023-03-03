import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<RowDataPacket[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(`
    SELECT o.id, o.user_id AS userId, json_arrayagg(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON
    o.id = p.order_id
    GROUP BY o.id
    `);

    return result;
  }

  public async create(userId: number | undefined, productsIds: number[]) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders(user_id) VALUES(?)',
      [userId],
    );

    await Promise.all(
      productsIds.map(async (e: number) => {
        await this.connection.execute(
          'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
          [insertId, e],
        );
        return '';
      }),
    );

    return { userId, productsIds };
  }
}