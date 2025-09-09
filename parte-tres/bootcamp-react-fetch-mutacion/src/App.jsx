/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Note from './components/Note';
import './App.css'

function App() {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    setTimeout(() => {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setNotes((json));
          console.log(json)
        });
    }, 2000)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteToAdd = {
      id: notes.length + 1,
      title: newNote,
      body: "This is a new note",
    };
    setNotes([...notes, noteToAdd]);
    setNewNote("");
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };


  return (
    <div> <h1>Notes</h1>

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add Note</button>
      </form>

    </div>


  )
}

export default App
