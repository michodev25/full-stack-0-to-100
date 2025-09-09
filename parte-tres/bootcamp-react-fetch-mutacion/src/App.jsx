import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect((
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json))
  ), [])

  return (
    <h1>Notes</h1>
    {loading ? "Cargando..." : ""}
    <ol>
      {notes.map}

    </ol>
   
  )
}

export default App
