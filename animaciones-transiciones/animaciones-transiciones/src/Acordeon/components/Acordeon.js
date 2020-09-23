import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import arrow from '../assets/arrow.svg';

const Acordeon = ({ title, contenido, bgColor }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef();

  const panelStyles = {
    background: bgColor,
    color: '#FFF',
    padding: '0.5em 1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none'
  };

  const contentStyles = {
    height: expanded ? contentRef.current.scrollHeight : 0,
    overflow: 'hidden',
    transition: 'all 350ms ease-out',
    border: `1px solid ${bgColor}`,
    padding: expanded ? '1em 0.5em' : '0 0.5em'
  };

  const imageStyles = {
    transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 250ms ease'
  };

  return (
    <div>
      <div style={panelStyles} onClick={() => setExpanded(!expanded)}>
        <span>
          {title}
        </span>
        <img src={arrow} alt="arrow" style={imageStyles} />
      </div>

      <div style={contentStyles} ref={contentRef}>
        {contenido}
      </div>
    </div>
  );
};

Acordeon.propTypes = {
  title: PropTypes.string,
  contenido: PropTypes.string,
  bgColor: PropTypes.string
};

Acordeon.defaultProps = {
  title: 'Titulo',
  contenido: '',
  bgColor: 'purple'
}

export default Acordeon;