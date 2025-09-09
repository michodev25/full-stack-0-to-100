/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Note from './components/Note';
import './App.css'

function App() {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect((
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {setNotes(json)})
  ), []);

  return (
    <div> <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {notes.map(note => {
          <Note key={note.id} {...note} />
        }
        )}
      </ol>

      <form>
        
      </form>

    </div>


  )
}

export default App
