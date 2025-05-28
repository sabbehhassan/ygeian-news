import axios from 'axios';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const YGEIAN_NEWS = axios.create({ baseURL: backendUrl });
