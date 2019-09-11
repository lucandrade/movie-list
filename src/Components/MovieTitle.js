import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieTitle extends Component {
    render() {
        const { title, link } = this.props;

        return (
            <div className="flex flex-col md:flex-row mb-4 items-baseline">
                <h1 className="text-3xl leading-none">
                    {title}
                </h1>
                <div className="ml-0 md:ml-2 mt-2 md:mt-0">
                    <Link className="inline-block md:hidden mr-2" to="/">&#x2190; Go Back</Link>
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                        className="external">
                        Website <span className="text-xs">&#x2197;</span>
                    </a>
                </div>
            </div>
        );
    }
}
