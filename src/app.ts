import express from 'express';
import errorMiddleware from './Middlewares/errMiddleware';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';
import OrderRoutes from './routes/order.routes';

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Bem vindo ao TrybeSmith');
});

app.use(errorMiddleware);
app.use(express.json());

app.use(ProductRoutes);  
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;
