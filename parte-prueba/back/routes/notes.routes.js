import express from 'express';

import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/notes.controller.js';

const noteRouter = express.Router();

noteRouter.post('/notes', createNote);
noteRouter.get('/notes', getAllNotes);
noteRouter.get('/notes/:id', getNoteById);
noteRouter.put('/notes/:id', updateNote);
noteRouter.delete('/notes/:id', deleteNote);
export default noteRouter;