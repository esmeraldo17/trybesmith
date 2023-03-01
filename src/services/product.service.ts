import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.imterface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
} 