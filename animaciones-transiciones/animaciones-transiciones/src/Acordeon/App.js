import React from 'react';
import Acordeon from './components/Acordeon';

const App = () => {
  return (
    <div>
      <Acordeon
        title="Usuarios"
        contenido="usuarios registrados en la aplicación"
        bgColor="#1ABC9C"
      />

      <Acordeon
        title="Empleados"
        contenido="empleados de la empresa mex"
        bgColor="#C39BD3"
      />

      <Acordeon
        title="Catálogos"
        contenido="mis catálogos de productos"
      />
    </div>
  );
};

export default App;