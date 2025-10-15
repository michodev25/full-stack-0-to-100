import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
    // Lógica para manejar la búsqueda
  }
  const handleChange = (event) => {
    updateSearch(event.target.value)
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
