import { useRef, useState } from 'react'
import { searchMovies } from '../services/moviesServices.js'

export function useMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    const getMovies = async () => {
        if (previusSearch.current === search) return
        try {
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    return { movies, getMovies, loading, error }
}