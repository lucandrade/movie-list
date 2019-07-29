import axios from 'axios';
import Storage from './Storage';
import RequestLog from './RequestLog';

const PHP_KEY = 'php';
const JAVA_KEY = 'java';
const API_PLATFORM_KEY = 'api_platform';
const PHP_API_URL = process.env.REACT_APP_API_URL_PHP;
const JAVA_API_URL = process.env.REACT_APP_API_URL_JAVA;

const getPlatform = () => {
    const platform = Storage.get(API_PLATFORM_KEY);

    if (!platform) {
        return PHP_KEY;
    }

    return platform;
};

const getApiUrl = () => {
    if (getPlatform() === PHP_KEY) {
        return PHP_API_URL;
    }

    return JAVA_API_URL;
};

const instance = axios.create({
    baseURL: getApiUrl(),
});

instance.interceptors.request.use(
    (config) => {
        config.metadata = { startTime: new Date() };
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => {
        response.config.metadata.endTime = new Date();
        const duration = response.config.metadata.endTime - response.config.metadata.startTime;
        const endpoint = response.config.url.replace(response.config.baseURL, '');
        RequestLog.add(duration, endpoint, getPlatform());
        return response;
    },
    (error) => Promise.reject(error)
);

export const setToPhp = () => {
    Storage.set(API_PLATFORM_KEY, PHP_KEY);
    instance.defaults.baseURL = PHP_API_URL;
};

export const setToJava = () => {
    Storage.set(API_PLATFORM_KEY, JAVA_KEY);
    instance.defaults.baseURL = JAVA_API_URL;
};

export const isPhp = () => getPlatform() === PHP_KEY;

export const isJava = () => getPlatform() === JAVA_KEY;

export default instance;
