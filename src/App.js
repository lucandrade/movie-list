import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Search from './Pages/Search';

export default class App extends Component {
    render() {
        return (
            <div className="h-screen bg-gray-800 text-white p-6 pt-24">
                <Router>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/search" component={Search} />
                </Router>
            </div>
        );
    }
}
