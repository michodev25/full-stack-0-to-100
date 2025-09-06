/* eslint-disable @typescript-eslint/no-unused-vars */

import './App.css';
import notes from './notes/notes';
import { Nota } from './components/Nota.jsx';
import { useState } from 'react';

function App() {
  const [notesState, setNotesState] = useState(notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event:any) => {
    setNewNote(event.target.value)
  }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event:any) => {
     const noteToAdd = {
    id: notesState.length + 1,
    content: newNote,
    date: new Date().toISOString().split('T')[0],
    important: Math.random() <0.5
   }
    setNotesState(notesState.concat(noteToAdd))
    setNewNote("")
     event.preventDefault();
  }
  const handleShowAll = () => {
    setShowAll(()=> !showAll);
  }

  if (notesState.length === 0 || !notesState) return <h1>No hay notas</h1>
  return (
    <div className="div">
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all " }</button>
      <ol>
        {notesState.filter( note => {
          if(showAll) return note;
          return note.important === true;
        })
        .map(note => (
          <Nota key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>

    </div>
  )
}

export default App
