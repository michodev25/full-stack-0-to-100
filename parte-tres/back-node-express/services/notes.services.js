
function createNote({ title, content }) {
    const note = { id: idCounter++, title, content };
    notes.push(note);
    return note;
}

function getAllNotes() {
    return notes;
}

function getNoteById(id) {
    return notes.find(n => n.id === id);
}

function updateNote(id, { title, content }) {
    const note = notes.find(n => n.id === id);
    if (!note) return null;
    note.title = title ?? note.title;
    note.content = content ?? note.content;
    return note;
}

function deleteNote(id) {
    const index = notes.findIndex(n => n.id === id);
    if (index === -1) return false;
    notes.splice(index, 1);
    return true;
}

export default {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
}
