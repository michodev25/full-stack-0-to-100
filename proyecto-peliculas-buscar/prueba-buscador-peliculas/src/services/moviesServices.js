const apiKey = import.meta.env.VITE_API_KEY;

export async function searchMovies ({ search }) {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}=`
    
    if (search === '') {
       return null
    }
    try {
    const res = await fetch(`${url}&s=${search}`)
    const data = await res.json()
    const movies = data.Search

    return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    } catch (error) {
        console.error(error)
        throw new Error('Error searching movies')
    }
}