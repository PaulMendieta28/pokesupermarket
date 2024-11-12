import axios from 'axios';
import process from 'process';

const createAxiosInstance = ( headers: any = {} ) => {
    return axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    });
}

export default createAxiosInstance;