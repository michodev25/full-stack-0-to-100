import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Notes from './components/Notes'
import Users from './components/Users'
import './App.css'

function App() {
  const [page, setPage] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    console.log(page)
    return page
  })

  const getContent = () => {
    if (page === 'users') return <Users />
    else if (page === 'notes') return <Notes />
    else return <h1>Home</h1>
  }

  const toPage = page => event => {
    event.preventDefault()
   window.history.pushState(null, '', `/${page}`)
   setPage(page)
  }
const inlineStyle = { padding: '10px' }
  return (
    <BrowserRouter>
      <header>
       <Link to="#" onClick={toPage('home')} style={inlineStyle}> Home</Link>
        <Link to="#" onClick={toPage('notes')} style={inlineStyle}>Notes </Link>
        <Link to="#" onClick={toPage('users')} style={inlineStyle}> Users</Link>
      </header>
      {getContent()}
    </BrowserRouter>
  )
}

export default App
