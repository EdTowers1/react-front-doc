import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Interceptor para añadir el token de autenticación
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Asegúrate de almacenar el token aquí
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;