import express from 'express';
import todosRoutes from './routes/todos.route.js';

const app = express();

app.use(express.json());
app.use("/api/todos", todosRoutes);

export default app;