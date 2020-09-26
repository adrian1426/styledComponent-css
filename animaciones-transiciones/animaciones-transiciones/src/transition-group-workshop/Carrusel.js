import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Carrusel.css';

const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images } = props;

  const atras = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(images.length - 1);
    }
  };

  const siguiente = () => {
    if (activeIndex < (images.length - 1)) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  return (
    <div className='Carrusel'>

      <div className="Carrusel_Buttons">
        <button onClick={atras}>Atras</button>
        <button onClick={siguiente}>Siguiente</button>
      </div>

      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          classNames='slide'
          key={activeIndex}
        >
          <img
            src={images[activeIndex]}
            alt="imagen"
            className='Carrusel_Img'
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Carrusel;