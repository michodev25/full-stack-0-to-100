/* eslint-disable @typescript-eslint/no-unused-vars */

import './App.css';
import notes from './notes/notes';
import { Nota } from './components/Nota.jsx';
import { useState } from 'react';

function App() {
  const [notesState, setNotesState] = useState(notes)
  const [newNote, setNewNote] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event:any) => {
    setNewNote(event.target.value)
  }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event:any) => {
     event.preventDefault();
  }
  const handleClick = () => {
   const noteToAdd = {
    id: notesState.length + 1,
    content: newNote,
    date: new Date().toISOString().split('T')[0],
    important: Math.random() <0.5
   }
    setNotesState(notesState.concat(noteToAdd))
    setNewNote("")

  }
  if (notesState.length === 0 || !notesState) return <h1>No hay notas</h1>
  return (
    <div className="div">
      <h1>Notes</h1>
      <ol>
        {notesState.map(note => (
          <Nota key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button type='submit' onClick={handleClick}>Crear Nota</button>
      </form>

    </div>
  )
}

export default App
