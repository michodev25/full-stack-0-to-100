import { useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
    // Lógica para manejar la búsqueda
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
   debouncedGetMovies(newSearch)
  }

  const handleSort = (event) => {
    event.preventDefault()
    setSort(!sort)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: "1 px solid transparent",
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search}
            placeholder='Avengers, Star Wars, The Matrix' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>



        {error ? <p style={{ color: "red" }}>{error}</p> : null}
      </header>

      <main>
        {
          loading ?
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
