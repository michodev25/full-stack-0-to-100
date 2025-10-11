const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getCatImage = async (text) => {
  const firstThreeWords = text.split(' ', 3).join(' ')
  const res = await fetch(`https://cataas.com/cat/cute/says/${firstThreeWords}?json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
