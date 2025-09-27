
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Notes from './components/Notes'
import Users from './components/Users'
import './App.css'

function App() {

  const inlineStyle = { padding: '10px' }
  return (
    <BrowserRouter>
      <header>
        <Link to="/home" style={inlineStyle}> Home</Link>
        <Link to="/notes" style={inlineStyle}>Notes </Link>
        <Link to="/users" style={inlineStyle}> Users</Link>
      </header>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
