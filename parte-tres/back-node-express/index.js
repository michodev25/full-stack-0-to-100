import express from 'express';
import 'dotenv/config';
import notesRouter from './routes/notes.routes.js';
import conectarDB from './services/database.js';
import userRoutes from './routes/user.routes.js';
const app = express();

app.use(express.json());
app.use('/api/', notesRouter);
app.use('/api/users', userRoutes);
app.use('/', (req, res) => {
    res.send('Welcome to the Notes API');
} )


conectarDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}  🚀`);
});

export default app;