import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/moviesServices.js'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    const getMovies = useCallback(async ({ search }) => {
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
    }, [])

return { movies: sortedMovies, getMovies, loading, error }
}