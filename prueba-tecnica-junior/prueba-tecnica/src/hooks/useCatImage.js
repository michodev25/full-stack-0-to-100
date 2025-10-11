import { useState, useEffect } from 'react'
import { getCatImage } from '../services/cat.service'

function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return
    getCatImage(fact).then(setImgUrl)
  }, [fact]
  )

  return { imgUrl }
}

export default useCatImage
