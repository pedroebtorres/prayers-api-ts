import express from 'express';
import prayersRouter from '../routers/prayers.routers';
import loginRouter from '../routers/login.routers';
import usersRouter from '../routers/users.router';

const app = express();

app.use(express.json());

app.use(prayersRouter);

app.use(loginRouter);

app.use(usersRouter);

export default app;