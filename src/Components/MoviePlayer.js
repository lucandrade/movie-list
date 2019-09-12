import React, { Component } from 'react';

export default class MovieVideoPlayer extends Component {
    render() {
        if (!this.props.trailer) {
            return null;
        }

        const { title, key } = this.props.trailer;

        if (!title) {
            return null;
        }

        return (
            <div className="flex-1 flex flex-col text-gray-900">
                <h2>{ title }</h2>
                <div className="flex-1 mt-12">
                    <div className="relative w-full h-0 overflow-hidden" style={{paddingBottom: '56.25%'}}>
                        <iframe className="w-full h-full top-0 left-0 absolute" frameBorder="0" title="YouTube video player" src={`https://www.youtube.com/embed/${key}`} />
                    </div>
                </div>
            </div>
        );
    }
}
