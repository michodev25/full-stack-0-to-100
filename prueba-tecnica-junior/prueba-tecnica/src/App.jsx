import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/cute/says/${firstThreeWords}?json=true`
function App () {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ', 3)
        console.log(firstThreeWords)
        fetch(`https://cataas.com/cat/cute/says/${firstThreeWords}?json=true`)
          .then(res => res.json())
          .then(data => {
            const { url } = data
            console.log(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>

  )
}

export default App
