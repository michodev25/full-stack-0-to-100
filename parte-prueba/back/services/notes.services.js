import { Note } from '../model/database.js';

// Crear
async function createNote({ title,body }) {
  try {
    const note = new Note({ title, body });
    return await note.save();
  } catch (error) {
    console.error("❌ Error al crear nota:", error.message);
    throw error;
  }
}

// Obtener todas
async function getAllNotes() {
 
    const notas = await Note.find();
    return notas;
  } /*
  const totalNotas = await Note.countDocuments();
  const notas = await Nota.find().skip(skip).limit(limite);
  console.log('Total de notas:', totalNotas);
  return {
    totalNotas,
    totalPaginas: Math.ceil(totalNotas / limite),
    paginaActual: pagina,
    notas
  }
  }
}*/

// Obtener por id
async function getNoteById(id) {
  return await Note.findById(id);
}

// Actualizar
async function updateNote(id, { title, content, important }) {
  return await Note.findByIdAndUpdate(
    id,
    { $set: { title, content, important } },
    { new: true } // devuelve la nota actualizada
  )
}

// Eliminar
async function deleteNote(id) {
  try {
    const result = await Note.findByIdAndDelete(id);
    return result ? true : false;
  } catch (error) {
    console.error("❌ Error al eliminar nota:", error.message);
    throw error;
  }
}

export default {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
