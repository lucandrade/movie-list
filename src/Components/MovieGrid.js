import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieGrid extends Component {
    renderMovie(movie, i) {
        return (
            <MovieCard movie={movie} key={`${movie.id}-${i}`} />
        );
    }

    render() {
        const { movies } = this.props;

        if (!movies) {
            return null;
        }

        if (movies.length < 1) {
            return null;
        }

        return (
            <div className="flex flex-wrap -mx-3 mt-4">
                {movies.map(this.renderMovie.bind(this))}
            </div>
        );
    }
}
