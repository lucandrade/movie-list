import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="w-full fixed top-0 left-0 p-6 flex bg-black text-white">
                <div className="">
                    <Link to="/">MovieList</Link>
                </div>
            </nav>
        );
    }
}
