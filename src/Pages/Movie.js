import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';
import SimilarMovieCard from '../Components/SimilarMovieCard';
import MovieTitle from '../Components/MovieTitle';
import MovieTrailer from '../Components/MovieTrailer';
import MoviePlayer from '../Components/MoviePlayer';
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
            posterOpened: false,
            modalOpened: false,
            trailer: null,
        };
    }

    componentDidMount() {
        this.loadMovie(this.state.movieId);
    }

    componentDidUpdate() {
        const movieId = getMovieIDFromRouteParams(this.props.match.params);

        if (!movieId) {
            return;
        }

        if (movieId !== this.state.movieId) {
            this.loadMovie(movieId);
        }
    }

    async loadMovie(movieId) {
        this.setState({ loading: true, movieId });
        const result = await MovieRepository.get(movieId);

        if (!result) {
            this.setState({ loading: false, movie: {} });
            return;
        }

        this.setState({
            loading: false,
            movie: result
        });
    }

    onClickPoster() {
        this.setState({
            posterOpened: !this.state.posterOpened,
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
            <div className={`rounded-lg overflow-hidden image-container ${this.state.posterOpened ? 'opened' : ''}`} onClick={this.onClickPoster.bind(this)}>
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

    renderSimilar(movie) {
        if (!movie.similar) {
            return null;
        }

        if (!Array.isArray(movie.similar)) {
            return null;
        }

        return (
            <div className="mt-2">
                {movie.similar.map((m, i) => (
                    <SimilarMovieCard movie={m} key={`${m.id}-${i}`} />
                ))}
            </div>
        );
    }

    renderTrailers(movie) {
        if (!movie.trailers) {
            return null;
        }

        if (!Array.isArray(movie.trailers)) {
            return null;
        }

        return (
            <div className="flex flex-wrap -mx-2 pt-4">
                {movie.trailers.map((m, i) => (
                    <MovieTrailer key={i} title={m.title} youtubeKey={m.key} onClick={this.onOpenPlayer.bind(this, m)} />
                ))}
            </div>
        );
    }

    onOpenPlayer(trailer) {
        this.setState({
            modalOpened: true,
            trailer,
        });
    }

    onCloseModal() {
        this.setState({
            modalOpened: false,
        });
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
            <div className="xl:container container mx-auto mt-4 movie-page">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 flex flex-col pr-4">
                        <div>
                            <MovieTitle title={movie.title} link={movie.link} />
                            {this.renderImage(movie)}
                            <div className="px-0 pt-4">
                                <Link to="/" className="hidden md:inline-block mb-2">&#x2190; Go Back</Link>
                                {this.renderGenres(movie)}
                                <div className="mt-6">
                                    {movie.description}
                                </div>
                            </div>
                        </div>
                        <div className="px-0 pt-4">
                            <h2 className="text-3xl leading-none">Trailers</h2>
                            {this.renderTrailers(movie)}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 md:px-4 mt-4 md:mt-0">
                        <h2 className="text-3xl leading-none mb-4">Similar Movies</h2>
                        {this.renderSimilar(movie)}
                    </div>
                </div>
                <Modal opened={this.state.modalOpened} onClose={this.onCloseModal.bind(this)}>
                    <MoviePlayer trailer={this.state.trailer} />
                </Modal>
            </div>
        );
    }
}
