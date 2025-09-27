/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Note from './components/Note';
//import { Login } from './components/Login.jsx';
import Pagination from './components/Pagination';
import './App.css'
import { createNote, getAllNotes, setToken } from './services/note/note.js';
import { login } from './services/auth.services.js';
import { Login } from './components/Login.jsx';
import { NoteForm } from './components/NoteForm.jsx';
function App() {
  const [notes, setNotes] = useState([]);
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

  useEffect(() => {
    const loggerUserApp = window.localStorage.getItem('loggerUserAppNote');
    if (loggerUserApp) {
      const user = JSON.parse(loggerUserApp);
      setUser(user);
      setToken(user.token);
    }
  }, []);

  const handleLogout = (e) => {
    setUser(null);
    setToken(user.token);
    window.localStorage.removeItem("loggerUserAppNote");
  }

  const addNote = (noteObject) => {
    createNote(noteObject).then(returnNote => {
      setNotes(notes.concat(returnNote))
    })
  }


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const user = await login(username, password)
    setUser(user);

    window.localStorage.setItem(
      "loggerUserAppNote", JSON.stringify(user)
    )

    setToken(user.token)
    setUsername('');
    setPassword('');

  } catch (error) {
    console.log(error)
  }

  console.log("THIS IS SUBMITTT")
}



const handleUsername = ({ target }) => setUsername(target.value);
const handlePassword = ({ target }) => setPassword(target.value)
const [currentPage, setCurrentPage] = useState(1);
const notesPerPage = 10;
// Paginación
const indexOfLastNote = currentPage * notesPerPage;
const indexOfFirstNote = indexOfLastNote - notesPerPage;
const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);


return (
  <div>
    <h1>Notes</h1>
    {
      user
        ? <NoteForm
          notes = {notes}
          addNote={addNote}
          handleLogout={handleLogout}

        />
        : <Login
          username={username}
          password={password}
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          handleLogin={handleLogin}
        />
    }
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

export default App
