const storage = window.localStorage;
const KEY = 'request_log';

class RequestLog {
    add(duration, endpoint) {
        const logs = this.get();
        logs.push({ duration, endpoint });
        const formattedLogs = JSON.stringify(logs);
        storage.setItem(KEY, formattedLogs);
    }

    get() {
        const data = storage.getItem(KEY);

        try {
            return JSON.parse(data) || [];
        } catch (e) {
            return [];
        }
    }

    clear() {
        storage.removeItem(KEY);
    }
}

const instance = new RequestLog();

export default instance;
