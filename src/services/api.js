
import axios from 'azios';

export const api = axios.create({
    baseURL: 'https://api.github.com'
})