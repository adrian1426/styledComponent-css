import React, { useState, useEffect } from 'react';
import './Slides.css';

const Slides = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images } = props;

  useEffect(() => {
    const tick = setInterval(() => {
      if (activeIndex < (images.length - 1)) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(tick);
    };
  }, [activeIndex, images.length]);

  return (
    <div className="Slide">

      <div className="Slide_Container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.title}
            className={
              activeIndex === i ? 'Slide_Container_Img animaShow' : 'Slide_Container_Img animaHide'
            }
          />
        ))}

        <div className="Slide_Container_Title">
          {images[activeIndex].title}
        </div>
      </div>

    </div>
  );
};

export default Slides;