import express from 'express';

import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/notes.controler.js';

const notasRouter = express.Router();


notasRouter.post('/notes', createNote);
notasRouter.get('/notes', getAllNotes);
notasRouter.get('/notes/:id', getNoteById);
notasRouter.put('/notes/:id', updateNote);
notasRouter.delete('/notes/:id', deleteNote);


export default  notasRouter;