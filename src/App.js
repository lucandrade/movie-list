import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Search from './Pages/Search';
import Log from './Pages/Log';
import { PATH_HOME, PATH_LOGS, PATH_MOVIE, PATH_SEARCH } from './Support/Paths';

export default class App extends Component {
    render() {
        return (
            <div className="h-full min-h-screen bg-gray-800 text-white p-6 pt-24">
                <Router>
                    <NavBar />
                    <Route path={PATH_HOME} exact component={Home} />
                    <Route path={PATH_SEARCH} component={Search} />
                    <Route path={PATH_MOVIE} component={Movie} />
                    <Route path={PATH_LOGS} component={Log} />
                </Router>
            </div>
        );
    }
}