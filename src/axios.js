import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Asegúrate de que la URL coincida con allowed_origins en CORS
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Habilita el envío de cookies o tokens
});

export default api; 