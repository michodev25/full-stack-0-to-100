import useFact from './hooks/useFact'
import useCatImage from './hooks/useCatImage'
import './style.css'

function App () {
  const { fact, refreshFact } = useFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt={`esta es una imagen de un gato con las palabras ${fact}`} />}
    </main>

  )
}

export default App
