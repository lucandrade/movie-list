import React, { Component } from 'react';
import RequestLog from '../Support/RequestLog';

export default class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
        };
    }

    componentDidMount() {
        this.loadLogs();
    }

    async loadLogs() {
        const result = await RequestLog.get();

        if (!result) {
            return;
        }

        this.setState({
            logs: result,
        });
    }

    async onClear() {
        await RequestLog.clear();
        await this.loadLogs();
    }

    renderLogs() {
        const { logs } = this.state;

        if (!logs) {
            return null;
        }

        const items = logs.map((log, i) => (
            <tr className="border-b text-sm" key={i}>
                <td className="px-4 py-1">{`${log.duration / 1000}s`}</td>
                <td className="px-4 py-1">{log.endpoint}</td>
            </tr>
        ));

        return (
            <tbody>
                {items}
            </tbody>
        );
    }

    render() {
        return (
            <div>
                <h1 className="text-3xl font-semibold mb-2">
                    Requests Log
                    <button type="button"
                        onClick={this.onClear.bind(this)}
                        className="btn primary btn-xs ml-2 align-text-bottom">
                        Clear
                    </button>
                </h1>
                <table className="border-collapse w-full text-left">
                    <thead>
                        <tr className="border-b border-t">
                            <th className="p-4">Duration</th>
                            <th className="p-4">Endpoint</th>
                        </tr>
                    </thead>
                    {this.renderLogs()}
                </table>
            </div>
        );
    }
}
