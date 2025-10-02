/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Note from './Note.jsx';
import { createNote, getAllNotes, setToken } from '../services/note.js';
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
  },[]);

  const createNoteForm = (e) => {
    e.preventDefault();
    const noteToAdd = {
      title: newNote,
      content: "This is a new note",
      userId: 1
    };
    addNote(noteToAdd);
    setNewNote('');

  }

  const [newNote, setNewNote] = useState([]);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };


  const addNote = (noteObject)  => {
    createNote(noteObject).then(returnNote => {
      setNotes(notes.concat(returnNote))
    })
  }



  return (
    <div>
      <h1>Notes</h1>

      <h1>Create a new note</h1>
            <form onSubmit={createNoteForm}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button type="submit">Add Note</button>
            </form>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
    
  
    </div>
  )
}

export default Notes;