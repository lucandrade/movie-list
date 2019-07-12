import React, { Component } from 'react';
import MovieRepository from '../Repositories/MovieRepository';
import MovieGrid from '../Components/MovieGrid';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: [],
            page: 0,
            total: 0,
            canLoad: true,
        };
    }

    componentDidMount() {
        this.loadMovies();
    }

    async loadMovies() {
        this.setState({ loading: true });
        const result = await MovieRepository.listPopular(this.state.page + 1);

        if (!result) {
            this.setState({ loading: false });
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
            canLoad: total > movies.length,
        });
    }

    renderLoadMoreButton() {
        const { loading, canLoad } = this.state;

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
        return (
            <div>
                <h1 className="text-3xl font-semibold mb-6">Popular Movies</h1>
                <MovieGrid movies={this.state.movies} />
                {this.renderLoadMoreButton()}
            </div>
        );
    }
}
