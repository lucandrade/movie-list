import React, { Component } from 'react';

export default class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="w-1/4 px-3 mb-6">
                <div className="border border-white rounded p-4">
                    {movie.title}
                </div>
            </div>
        );
    }
}
