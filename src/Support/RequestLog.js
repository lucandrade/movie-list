import Storage from './Storage';

const KEY = 'request_log';

class RequestLog {
    add(duration, endpoint) {
        const logs = Storage.get(KEY);
        logs.push({ duration, endpoint });
        Storage.set(KEY, logs);
    }

    get() {
        return Storage.get(KEY);
    }

    clear() {
        Storage.remove(KEY);
    }
}

const instance = new RequestLog();

export default instance;
