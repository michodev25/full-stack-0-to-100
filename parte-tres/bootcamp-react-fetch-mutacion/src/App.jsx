/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Note from './components/Note';
//import { Login } from './components/Login.jsx';
import Pagination from './components/Pagination';
import './App.css'
import { createNote, getAllNotes } from './services/note/note.js';
import { login } from './services/auth.services.js';
function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)

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

  const handleLogin = async (e) => {
    e.preventDefault();
   try {
     const user = await login(username, password)
      .then((json) => {
        setUser(json);
        console.log(json);
      });
      setUsername('');
      setPassword('');
   } catch (error) {
    console.log(error)
   }
    console.log("THIS IS SUBMITTT")
  }

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
       <div>
            <form onSubmit={handleLogin}>
        <div>
          <input type="text"
            value={username}
            name='Username'
            placeholder='Username'
            onChange={(target) => setUsername(target.value)}
          />
        </div>
        <div className="div">
          <input type="text"
            value={password}
            name='Password'
            placeholder='Password'
            onChange={(target) => setPassword(target.value)}
          />
        </div>
        <button>
          Login
        </button>
      </form>
       </div>
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
