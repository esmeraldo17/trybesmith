import express from 'express';
import errorMiddleware from './Middlewares/errMiddleware';
import ProductRoutes from './routes/product.routes';

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Bem vindo ao TrybeSmith');
});

app.use(errorMiddleware);
app.use(express.json());

app.use(ProductRoutes);  

export default app;
