import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PATH_HOME, makeSearchUrl } from '../Support/Paths';

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

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push(makeSearchUrl(this.input.current.value));
    }

    render() {
        return (
            <nav className="w-full fixed top-0 left-0 p-6 flex items-center bg-black text-white">
                <div className="">
                    <Link to={PATH_HOME}>MovieList</Link>
                </div>
                <form className="flex-1 pl-6" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text"
                            ref={this.input}
                            className="shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Search" />
                </form>
            </nav>
        );
    }
}

export default withRouter(NavBar);
