import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PATH_HOME, PATH_LOGS, makeSearchUrl } from '../Support/Paths';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            opened: false,
        };
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

        this.setState({
            opened: false,
        });

        if (path && this.props.location.pathname !== path) {
            this.input.current.value = "";
            this.props.history.push(path);
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push(makeSearchUrl(this.input.current.value));
    }

    onToggleMenu() {
        this.setState({
            opened: !this.state.opened,
        });
    }

    render() {
        return (
            <nav className="w-full fixed top-0 left-0 bg-black text-white">
                <div className="block p-6 flex items-center">
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
                        <div className="text-gray-400">
                            <a href="/" onClick={this.onGoToPath.bind(this, PATH_LOGS)}>
                                Requests Log
                            </a>
                        </div>
                    </div>
                    <div className="block md:hidden pl-6 flex-1 text-right text-xl" onClick={this.onToggleMenu.bind(this)}>
                        &#9776;
                    </div>
                </div>
                <div className={`bg-gray-100 px-6 py-2 text-gray-900 collapsible ${!this.state.opened ? 'collapsed' : ''}`}>
                    <a href="/" onClick={this.onGoToPath.bind(this, PATH_LOGS)}>
                        Requests Log
                    </a>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);
