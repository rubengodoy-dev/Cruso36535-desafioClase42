import express from 'express';
import usersRouter from './routers/usersRouter.js';


const PORT = process.env.PORT || 8080
const app = express();
const server = app.listen(PORT, () => console.log(`Conectado http escuchando en ${server.address().port}`));
server.on("error", err => console.log(err))

app.use(express.json());
app.use('/users', usersRouter);
