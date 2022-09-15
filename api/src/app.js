import  express  from "express";
import financeRoutes from './routes/finance.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

//middlewares
app.use(express.json());
app.use(financeRoutes);
app.use(userRoutes);

export default app;