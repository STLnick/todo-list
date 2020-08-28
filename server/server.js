import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import got from 'got';

import todos from './routes/todos';
import users from './routes/users';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', todos);
app.use('/users', users);

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
