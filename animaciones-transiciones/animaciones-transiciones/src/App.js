import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>{active ? 'Desactivar' : 'Activar'}</button>
      <Header show={active} />
    </div>
  );
}

export default App;
