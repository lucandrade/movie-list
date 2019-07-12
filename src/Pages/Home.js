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
            loaded: false,
        };
    }

    componentDidMount() {
        this.loadMovies();
    }

    async loadMovies() {
        this.setState({ loading: true });
        const result = await MovieRepository.listPopular(this.state.page + 1);

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
        });
    }

    renderLoadMoreButton() {
        const { loaded, loading } = this.state;

        if (!loaded) {
            return null;
        }

        return (
            <button type="button"
                    onClick={this.loadMovies.bind(this)}
                    disabled={loading}
                    className="btn primary">
                Load More
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
