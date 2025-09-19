import notesService from '../services/notes.services.js'
import jwt from 'jsonwebtoken';
// Obtener todas las notas
export const getAllNotes = async (req, res) => {
    try {
        const notes = await notesService.getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las notas' });
    }
};

// Obtener una nota por ID
export const getNoteById = async (req, res) => {
    try {
        const note = await notesService.getNoteById(req.params.id);
        if (!note) return res.status(404).json({ error: 'Nota no encontrada' });
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la nota' });
    }
};

// Crear una nueva nota
export const createNote = async (req, res) => {
    const authorization = req.headers.authorization;
    const {title, content, important, userid} = req.body
    let token = null;
      if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
      }
      let decodedToken = {};
       decodedToken = jwt.verify(token, process.env.JWT_SECRET)
     
      if (!token || !decodedToken.id) {
        console.log("❌ No tienes acceso:");
        res.status(401).json({error: "Token invalido o se ha perdido"})
      }
    try {
        const newNote = await notesService.createNote(title, content, important, userid);
        res.status(201).json({newNote});
    } catch (error) {
    
        res.status(500).json({ error: 'Error al crear la nota' });
    }
};

// Actualizar una nota
export const updateNote = async (req, res) => {
    try {
        const updatedNote = await notesService.updateNote(req.params.id, req.body);
        if (!updatedNote) return res.status(404).json({ error: 'Nota no encontrada' });
        res.json({updatedNote});
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la nota' });
    }
};

// Eliminar una nota
export const deleteNote = async (req, res) => {
    try {
        const deleted = await notesService.deleteNote(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Nota no encontrada' });
        res.json({ message: 'Nota eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la nota' });
    }
};
