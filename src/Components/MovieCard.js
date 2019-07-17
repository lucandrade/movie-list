import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeMovieUrl } from '../Support/Paths';

export default class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        let image = null;

        if (movie.image) {
            image = (
                <div className="rounded-t overflow-hidden">
                    <Link to={makeMovieUrl(movie.id)}>
                        <img src={movie.image} alt={movie.title} />
                    </Link>
                </div>
            );
        }

        return (
            <div className="flex w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 px-3 mb-6">
                <div className="flex-1 flex flex-col border border-white rounded">
                    {image}
                    <div className="p-4">
                        <Link to={makeMovieUrl(movie.id)}>
                            {movie.title}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
