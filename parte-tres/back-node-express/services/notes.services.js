import Note from "../data/noteModel.js"

// Crear
async function createNote({ title, content, important }) {
  try {
    const note = new Note({ title, content, important, date: new Date() });
    return await note.save();
  } catch (error) {
    console.error("❌ Error al crear nota:", error.message);
    throw error;
  }
}

// Obtener todas
async function getAllNotes() {
  return await Note.find();
}

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
