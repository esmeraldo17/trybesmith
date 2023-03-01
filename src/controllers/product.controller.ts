import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    console.log(req.body);
    
    const productInserted = await this.productService.create(product);
    res.status(statusCodes.CREATED).json(productInserted);
  };
}