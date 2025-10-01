/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Note from './components/Note.jsx';
//import { Login } from './components/Login.jsx';
import Pagination from './components/Pagination.jsx';
import './App.css'
import { createNote, getAllNotes, setToken } from '../services/note.js';
import { NoteForm } from './components/NoteForm.jsx';
function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getAllNotes()
        .then((json) => {
          setNotes(json);
        });
        console.log(notes)
    }, 2000)
  }, []);


  const addNote = (noteObject) => {
    createNote(noteObject).then(returnNote => {
      setNotes(notes.concat(returnNote))
    })
  }




const [currentPage, setCurrentPage] = useState(1);
const notesPerPage = 10;
// Paginación
const indexOfLastNote = currentPage * notesPerPage;
const indexOfFirstNote = indexOfLastNote - notesPerPage;
const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

return (
       <div>
    <h1>Notes</h1>
    
    
     <NoteForm
          notes = {notes}
          addNote={addNote}
        />
    
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
  </div>
  )
}

export default Notes;