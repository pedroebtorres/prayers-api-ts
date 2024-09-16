import express from 'express';
import prayersRouter from '../routers/prayers.routers';
import loginRouter from '../routers/login.routers';

const app = express();

app.use(express.json());

app.use(prayersRouter);

app.use(loginRouter);

export default app;