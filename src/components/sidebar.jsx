// src/components/Sidebar.jsx
import React, { useEffect, useState } from 'react';
import api from '../axios'; // Archivo configurado previamente para las peticiones

function Sidebar() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Obtener los datos del menú desde la API
    api.get('/menu')
      .then(response => {
        setMenuItems(response.data || []); // Ajustar según la estructura de la respuesta
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  const renderMenuItems = (items) => {
    return items.map(item => (
      <li key={item.id} className="menu-item">
        <a href={item.url || '#'} className="menu-link">
          {item.icon && <i className={`menu-icon ${item.icon}`}></i>}
          {item.name}
        </a>
        {/* Renderizar submenús si existen */}
        {item.children && item.children.length > 0 && (
          <ul className="submenu">
            {renderMenuItems(item.children)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menú</h3>
      </div>
      <ul className="menu-list">
        {menuItems.length > 0 ? (
          renderMenuItems(menuItems)
        ) : (
          <li>Cargando menú...</li>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
