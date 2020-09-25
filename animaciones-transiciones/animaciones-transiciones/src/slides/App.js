import React from 'react';
import Slides from './Slides';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const images = [
  {
    src: img1,
    title: 'Imagen 1, probando slides'
  },
  {
    src: img2,
    title: 'Imagen 2, probando slides'
  },
  {
    src: img3,
    title: 'Imagen 3, probando slides'
  },
  {
    src: img4,
    title: 'Imagen 4, probando slides'
  },
  {
    src: img5,
    title: 'Imagen 5, probando slides'
  }
];

const App = () => {
  return (
    <div>
      <Slides images={images} />
    </div>
  );
};

export default App;