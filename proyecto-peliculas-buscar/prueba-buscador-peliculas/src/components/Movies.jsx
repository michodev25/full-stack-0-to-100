function HasMovies( { movies } ) {
    console.log(movies)
    return (
        <ul className='movies'>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img
                        alt={`Poster de la pelicula ${movie.title}`}
                        src={
                            movie.poster === 'N/A'
                                ? 'https://via.placeholder.com/200x300?text=No+Image'
                                : movie.poster
                        }
                    />
                </li>
            ))}
        </ul>
    )
}

function NoMovies() {
    return <p>No se encontraron peliculas</p>
}

export function Movies({movies}) {
    const hasMovies = movies?.length > 0
    return hasMovies ? <HasMovies movies={movies} /> : <NoMovies />
}