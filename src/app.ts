import express from 'express';
import * as dotenv from 'dotenv';
import departuresRoutes from './routes/departuresRoutes';

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use('/departures', departuresRoutes);

export { app };