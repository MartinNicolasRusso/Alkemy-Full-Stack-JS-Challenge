import  express  from "express";
import financeRoutes from './routes/finance.routes.js'

const app = express();

//middlewares
app.use(express.json());
app.use(financeRoutes);

export default app;