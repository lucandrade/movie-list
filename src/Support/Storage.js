const storage = window.localStorage;

class Storage {
    client = storage;

    set(key, value) {
        let data = value;

        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }

        this.client.setItem(key, data);
    }

    get(key) {
        const data = this.client.getItem(key);

        try {
            return JSON.parse(data) || [];
        } catch (e) {
            return [];
        }
    }

    remove(key) {
        this.client.removeItem(key);
    }
}

const instance = new Storage();

export default instance;
