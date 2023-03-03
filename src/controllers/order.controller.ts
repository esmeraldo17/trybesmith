import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import OrderService from '../services/order.service';

type ReqUser = {
  user?: { id: number }
};

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    res.status(statusCodes.OK).json(orders);
  };

  public create = async (req: Request & ReqUser, res: Response) => {
    const { id } = req.user || {};
    const { productsIds } = req.body;

    const orderInserted = await this.orderService.create(id, productsIds);

    res.status(statusCodes.CREATED).json(orderInserted);
  };
}