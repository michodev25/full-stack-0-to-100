import express from 'express';
import 'dotenv/config';
import notesRouter from './routes/notes.routes.js';
import conectarDB from './model/database.js';
import { get } from 'mongoose';
import { getPostsExt } from './services/api-Gateway .js';

const app = express();  
app.use(express.json());
app.use('/api/notes', notesRouter);
app.use('/', (req, res) => {
    res.send('Welcome to the Notes API');
})

conectarDB();
getPostsExt(true);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}  🚀`);
});