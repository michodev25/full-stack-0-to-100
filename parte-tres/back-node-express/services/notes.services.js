import Note from './Note.js';

// Crear
async function createNote({ title, content, important }) {
  try {
    const note = new Note({ title, content, important });
    return await note.save();
  } catch (error) {
    console.error("❌ Error al crear nota:", error.message);
    throw error;
  }
}

// Obtener todas
async function getAllNotes() {
  try {
    return await Note.find();
  } catch (error) {
    console.error("❌ Error al obtener notas:", error.message);
    throw error;
  }
}

// Obtener por id
async function getNoteById(id) {
  try {
    return await Note.findById(id);
  } catch (error) {
    console.error("❌ Error al obtener nota por ID:", error.message);
    throw error;
  }
}

// Actualizar
async function updateNote(id, { title, content, important }) {
  try {
    return await Note.findByIdAndUpdate(
      id,
      { $set: { title, content, important } },
      { new: true } // devuelve la nota actualizada
    );
  } catch (error) {
    console.error("❌ Error al actualizar nota:", error.message);
    throw error;
  }
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
