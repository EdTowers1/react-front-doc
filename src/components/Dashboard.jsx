// src/components/Dashboard.jsx
'use client';
import React, { useEffect, useState } from 'react';
import api from '../axios';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get('/dashboard')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>esto es una pruebaaaa</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default Dashboard;
