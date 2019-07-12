import React, { Component } from 'react';
import NavBar from './Components/NavBar';

export default class App extends Component {
    render() {
        return (
            <div className="h-screen bg-gray-800 text-white p-6 pt-24">
                <NavBar />
                <h1 className="m-0 p-0">Popular Movies</h1>
            </div>
        );
    }
}
