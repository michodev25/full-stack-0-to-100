/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Note from './components/Note';
import Pagination from './components/Pagination';
import './App.css'
import { createNote, getAllNotes } from '../services/note/note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  useEffect(() => {
    setTimeout(() => {
      getAllNotes()
        .then((json) => {
          setNotes(json);
        });
    }, 2000)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteToAdd = {
      id: notes.length + 1,
      title: newNote,
      body: "This is a new note",
      userId: 1
    };
    createNote(noteToAdd)
      .then((json) => console.log(json));
    setNotes([...notes, noteToAdd]);
    setNewNote("");
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  // Paginación
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {currentNotes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <Pagination
        totalNotes={notes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App
