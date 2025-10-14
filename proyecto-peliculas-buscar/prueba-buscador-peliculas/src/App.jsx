import './App.css'
import withResult from './data/movies-with-result.json'
import noResult from './data/movies-no-result.json'

function App() {
  const 

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix' />
           <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Aqui iran los resultados de la busqueda.
      </main>
    </div>
  )
}

export default App
