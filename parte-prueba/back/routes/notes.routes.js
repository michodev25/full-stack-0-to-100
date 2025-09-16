import express from 'express';

import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/notes.controller.js';

const noteRouter = express.Router();

noteRouter.post('/', createNote);
noteRouter.get('/', getAllNotes);
noteRouter.get('/:id', getNoteById);
noteRouter.put('/:id', updateNote);
noteRouter.delete('/:id', deleteNote);
export default noteRouter;