import { useEffect, useState } from 'react'
import './style.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/cute/says/${firstThreeWords}?json=true`
function App () {
  const [fact, setFact] = useState()
  const [catImg, setCatImg] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ', 3).join(' ')
        console.log(firstThreeWords)
        fetch(`https://cataas.com/cat/cute/says/${firstThreeWords}?json=true`)
          .then(res => res.json())
          .then(data => {
            const { url } = data
            setCatImg(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {catImg && <img src={catImg} alt={`esta es una imagen de un gato con las palabras ${fact}`} />}
    </main>

  )
}

export default App
