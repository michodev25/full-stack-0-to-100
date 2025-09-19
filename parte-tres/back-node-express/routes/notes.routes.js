import express from 'express';

import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/notes.controller.js';
import userExtractor from '../middlewares/userExtractor.js';

const notasRouter = express.Router();


notasRouter.post('/notes', userExtractor, createNote);
notasRouter.get('/notes', getAllNotes);
notasRouter.get('/notes/:id', getNoteById);
notasRouter.put('/notes/:id', userExtractor, updateNote);
notasRouter.delete('/notes/:id',userExtractor, deleteNote);


export default  notasRouter;