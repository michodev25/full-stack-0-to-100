//import { useState, useEffect } from "react"
import withResult from '../data/movies-with-results.json'
//import noResult from '../data/movies-no-result.json'

export function useMovies() {
    const movies =  withResult.Search

    const mappedMovies = movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }
    ))
    return { movies: mappedMovies }
}