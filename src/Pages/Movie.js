import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieRepository from '../Repositories/MovieRepository';

const getMovieIDFromRouteParams = (params) => {
    if (!params.id) {
        return null;
    }

    return params.id;
};

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movie: {},
            movieId: getMovieIDFromRouteParams(props.match.params),
        };
    }

    componentDidMount() {
        this.loadMovie();
    }

    async loadMovie() {
        this.setState({ loading: true });
        const result = await MovieRepository.get(this.state.movieId);

        if (!result) {
            this.setState({ loading: false, movie: {} });
            return;
        }

        this.setState({
            loading: false,
            movie: result,
        });
    }

    renderLoading() {
        return (
            <div>
                <h1 className="text-3xl font-semibold">Loading</h1>
            </div>
        );
    }

    renderNotFound() {
        return (
            <div>
                <h1 className="text-3xl font-semibold mb-4">Movie not found</h1>
                <Link className="btn primary" to="/">Back</Link>
            </div>
        );
    }

    renderImage(movie) {
        if (!movie.image) {
            return null;
        }

        return (
            <div className="flex-1 rounded-lg overflow-hidden">
                <img src={movie.image} alt={movie.title} />
            </div>
        );
    }

    renderGenres(movie) {
        if (!movie.genres) {
            return null;
        }

        if (!Array.isArray(movie.genres)) {
            return null;
        }

        return (
            <p className="badges">
                {movie.genres.map(genre => (
                    <span className="badge" key={genre}>
                        {genre}
                    </span>
                ))}
            </p>
        );
    }

    render() {
        const { loading, movie } = this.state;

        if (loading) {
            return this.renderLoading();
        }

        if (!movie.id) {
            return this.renderNotFound();
        }

        return (
            <div className="flex flex-col md:flex-row mt-4">
                {this.renderImage(movie)}
                <div className="flex-1 px-0 pt-4 md:px-4 md:pt-0">
                    <Link className="text-red-500 underline text-sm" to="/">Back</Link>
                    <div className="flex items-center mt-2">
                        <h1 className="text-3xl font-semibold leading-none">
                            {movie.title}
                        </h1>
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href={movie.link}
                            className="text-sm ml-2 external text-gray-400">Website <span className="text-xs">&#x2197;</span></a>
                    </div>
                    {this.renderGenres(movie)}
                    <div className="mt-6">
                        {movie.description}
                    </div>
                </div>
            </div>
        );
    }
}
