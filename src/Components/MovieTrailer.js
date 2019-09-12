import React, { Component } from 'react';

export default class MovieTrailer extends Component {
    render() {
        const { title, youtubeKey } = this.props;

        return (
            <div className="flex w-full sm:w-1/2 xl:w-1/3 mb-6 px-2 cursor-pointer">
                <div className="flex-1 flex flex-col">
                    <h3 className="flex-1 leading-tight font-medium mb-2">{title}</h3>
                    <img src={`https://img.youtube.com/vi/${youtubeKey}/0.jpg`} className="rounded-lg" alt={title} />
                </div>
            </div>
        );
    }
}
