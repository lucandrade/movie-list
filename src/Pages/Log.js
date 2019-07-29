import React, { Component } from 'react';
import { isPhp, isJava, setToPhp, setToJava } from '../Support/Request';
import RequestLog from '../Support/RequestLog';

export default class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            isPhp: isPhp(),
            isJava: isJava(),
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

    onSetToPhp() {
        if (this.state.isPhp) {
            return;
        }

        setToPhp();
        this.setState({
            isPhp: isPhp(),
            isJava: isJava(),
        });
    }

    onSetToJava() {
        if (this.state.isJava) {
            return;
        }

        setToJava();
        this.setState({
            isPhp: isPhp(),
            isJava: isJava(),
        });
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
                <td className="px-4 py-1">{log.platform}</td>
            </tr>
        ));

        return (
            <tbody>
                {items}
            </tbody>
        );
    }

    render() {
        const { isPhp, isJava } = this.state;

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
                <div className="inline-flex mb-2">
                    <button className={`btn ml-2 align-text-bottom ${isPhp ? 'primary' : ''}`} onClick={this.onSetToPhp.bind(this)}>
                        PHP
                    </button>
                    <button className={`btn ml-2 align-text-bottom ${isJava ? 'primary' : ''}`} onClick={this.onSetToJava.bind(this)}>
                        Java
                    </button>
                </div>
                <table className="border-collapse w-full text-left">
                    <thead>
                        <tr className="border-b border-t">
                            <th className="p-4">Duration</th>
                            <th className="p-4">Endpoint</th>
                            <th className="p-4">Platform</th>
                        </tr>
                    </thead>
                    {this.renderLogs()}
                </table>
            </div>
        );
    }
}
