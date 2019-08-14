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
            <div className="mt-4">
                <div className="flex flex-col md:flex-row mb-4 items-baseline md:items-center">
                    <h1 className="text-3xl font-semibold leading-none">
                        Requests Log
                    </h1>
                    <div className="flex-1 flex justify-start md:justify-end mt-4 md:mt-0">
                        <div className="btn-group">
                            <button className={`btn btn-xs primary ${isPhp ? 'opacity-50' : ''}`} onClick={this.onSetToPhp.bind(this)}>
                                PHP
                            </button>
                            <button className={`btn btn-xs primary ${isJava ? 'opacity-50' : ''}`} onClick={this.onSetToJava.bind(this)}>
                                Java
                            </button>
                        </div>
                        <div className="ml-2">
                            <button type="button"
                                onClick={this.onClear.bind(this)}
                                className="btn btn-xs danger">
                                Clear Logs
                            </button>
                        </div>
                    </div>
                </div>
                <table className="border-collapse w-full text-left">
                    <thead>
                        <tr className="border-b">
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
