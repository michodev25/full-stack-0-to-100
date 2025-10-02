
import { BrowserRouter, Routes, Route, Link } from "react-router";
import  { useState,useEffect } from "react";
import { getAllNotes } from './services/note.js'
import Notes from './components/Notes.jsx'
import Users from './components/Users.jsx'
import NoteDetail from './components/NoteDetail.jsx'
import './App.css'


function App() {
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

  const inlineStyle = { padding: '10px' }
  return (
    <BrowserRouter>
      <header>
        <Link to="/home" style={inlineStyle}> Home</Link>
        <Link to="/notes" style={inlineStyle}>Notes </Link>
        <Link to="/users" style={inlineStyle}> Users</Link>
      </header>
      <Routes>
        <Route path="/notes/:id" element={<NoteDetail  notes={notes}/>}/>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/notes" element={<Notes notes={notes} setNotes={setNotes} />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
