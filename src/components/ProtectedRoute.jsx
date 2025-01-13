// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token'); // Verifica si existe el token en localStorage

  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
