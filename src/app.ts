import express from 'express';
import * as dotenv from 'dotenv';
import linesRoutes from './routes/linesRoutes';
import estimateRoutes from './routes/estimateRoutes';
import usersRoutes from "./routes/usersRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use('/user', usersRoutes);
app.use('/estimate', estimateRoutes);
app.use('/line', linesRoutes);

export { app };