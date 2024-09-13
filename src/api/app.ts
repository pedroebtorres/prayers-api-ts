import express from 'express';
import prayersRouter from '../routers/prayers.routers';

const app = express();

app.use(express.json());

app.use(prayersRouter);

export default app;