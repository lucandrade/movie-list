import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PATH_HOME, PATH_LOGS, makeSearchUrl } from '../Support/Paths';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get('q');

        if (!query) {
            return;
        }

        this.input.current.value = decodeURI(query);
    }

    onGoToPath(path, e) {
        e.preventDefault();
        this.input.current.value = "";
        this.props.history.push(path);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push(makeSearchUrl(this.input.current.value));
    }

    render() {
        return (
            <nav className="w-full fixed top-0 left-0 p-6 flex items-center bg-black text-white">
                <div>
                    <a href="/" onClick={this.onGoToPath.bind(this, PATH_HOME)}>Movie List</a>
                </div>
                <form className="pl-6" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text"
                            ref={this.input}
                            className="shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Search" />
                </form>
                <div className="hidden md:block pl-6 flex-1 text-right">
                    <div className="text-sm text-gray-400">
                        <a href="/" onClick={this.onGoToPath.bind(this, PATH_LOGS)}>
                            Requests Log
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);
