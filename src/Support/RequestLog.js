import Storage from './Storage';

const KEY = 'request_log';

class RequestLog {
    add(duration, endpoint, platform) {
        const logs = this.get();
        logs.push({ duration, endpoint, platform });
        Storage.set(KEY, logs);
    }

    get() {
        return Storage.get(KEY) || [];
    }

    clear() {
        Storage.remove(KEY);
    }
}

const instance = new RequestLog();

export default instance;
