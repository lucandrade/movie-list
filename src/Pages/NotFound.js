import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PATH_HOME } from '../Support/Paths';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className="text-3xl font-semibold mb-2">
                    Page Not Found
                </h1>
                <Link className="btn primary" to={PATH_HOME}>Back</Link>
            </div>
        );
    }
}
