import express from 'express';
import errorMiddleware from './Middlewares/errMiddleware';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';
import OrderRoutes from './routes/order.routes';
import LoginRoutes from './routes/login.routes';

const app = express();

app.use(errorMiddleware);
app.use(express.json());

app.use(ProductRoutes);  
app.use(UserRoutes);
app.use(OrderRoutes);
app.use(LoginRoutes);

export default app;
