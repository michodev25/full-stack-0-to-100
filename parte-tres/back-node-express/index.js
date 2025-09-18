import express from 'express';
import 'dotenv/config';
import notesRouter from './routes/notes.routes.js';
import conectarDB from './services/database.js';
import userRoutes from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
const app = express();

app.use(express.json());
app.use('/api/', notesRouter);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRouter);
conectarDB();
app.all('/api/auth', (req, res, next) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Método no permitido' });
  }
  next();
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}  🚀`);
});

export default app;