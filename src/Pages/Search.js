import React, { Component } from 'react';
import MovieRepository from '../Repositories/MovieRepository';
import MovieGrid from '../Components/MovieGrid';

const getQueryFromLocation = (location) => {
    const params = new URLSearchParams(location.search);
    return params.get('q');
};

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: [],
            page: 0,
            total: 0,
            loaded: false,
            query: getQueryFromLocation(props.location),
            canLoad: true,
        };
    }

    componentDidMount() {
        this.loadMovies();
    }

    async loadMovies() {
        this.setState({ loading: true });
        const result = await MovieRepository.search(this.state.query, this.state.page + 1);

        if (!result) {
            this.setState({ loading: false, loaded: true });
            return;
        }

        const { page, total, items } = result;
        let movies = [];
        Array.prototype.push.apply(movies, this.state.movies);
        Array.prototype.push.apply(movies, items);
        
        this.setState({
            page,
            total,
            movies,
            loading: false,
            loaded: true,
            canLoad: total > movies.length,
        });
    }

    renderTitle() {
        const { loaded, total, query } = this.state;

        if (!loaded) {
            return (
                <h1 className="text-3xl font-semibold mb-2">
                    Loading
                </h1>
            );
        }

        return (
            <h1 className="text-3xl font-semibold mb-2">
                {total} movies found with <em>"{decodeURI(query)}"</em>
            </h1>
        );
    }

    renderLoadMoreButton() {
        const { loaded, loading, canLoad } = this.state;

        if (!loaded) {
            return null;
        }

        if (!canLoad) {
            return (
                <span disabled={true} className="btn primary disabled">
                    No More Results
                </span>
            );
        }

        return (
            <button type="button"
                    onClick={this.loadMovies.bind(this)}
                    disabled={loading}
                    className="btn primary">
                {loading ? 'Loading...' : 'Load More'}
            </button>
        );
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
                {this.renderTitle()}
                {this.renderLoadMoreButton()}
                <MovieGrid movies={movies} />
                {this.renderLoadMoreButton()}
            </div>
        );
    }
}
