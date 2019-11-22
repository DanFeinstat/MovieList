import React from 'react';
import MovieListItem from './movieListItem.jsx';

const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => <MovieListItem title={movie.title} />)}
        </ul>
    )
}

export default MovieList;