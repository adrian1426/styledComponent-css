import React from 'react';
import Carrusel from './Carrusel';

const images = [
  'https://images.pexels.com/photos/2686020/pexels-photo-2686020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/3876399/pexels-photo-3876399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2929246/pexels-photo-2929246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];

const App = () => {
  return (
    <div>
      <Carrusel images={images} />
    </div>
  );
};

export default App;