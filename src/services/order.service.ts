import connection from '../models/connection';
import OrderModel from '../models/order.nodel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(userId: number | undefined, productsIds: number[]) {
    const orderInserted = await this.model.create(userId, productsIds);
    return orderInserted;
  }
}