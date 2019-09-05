import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeMovieUrl } from '../Support/Paths';

export default class MovieListItem extends Component {
    render() {
        const { movie } = this.props;
        let image = null;

        if (movie.image) {
            image = (
                <Link className="rounded-t overflow-hidden movie-list-poster" style={{ backgroundImage: `url(${movie.image})` }} to={makeMovieUrl(movie.id)} />
            );
        }

        return (
            <div className="flex mb-6">
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
