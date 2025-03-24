import axios from 'axios';
import type { AxiosError } from 'axios';

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

//Interceptor error handler
client.interceptors.response.use((response) => response,
    (error: AxiosError) => {
        const { data, status } = error.response!;
        switch (status) {
            case 400:
                console.error(data);
                break;

            case 401:
                console.error('interceptor: unauthorised');
                break;

            case 404:
                console.error('interceptor: not-found');
                break;

            case 500:
                console.error('interceptor: server-error');
                break;
        }
        return Promise.reject(error);
    }
)

export default client;