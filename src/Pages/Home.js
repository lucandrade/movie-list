import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-3xl font-semibold mb-6">Popular Movies</h1>
                <Link to="/search" className="bg-blue-600 px-4 py-2 rounded inline-block">Search</Link>
            </div>
        );
    }
}
