import axios from 'axios';
import RequestLog from './RequestLog';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
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
        RequestLog.add(duration, endpoint);
        return response;
    },
    (error) => Promise.reject(error)
);

export default instance;
