import React from 'react';

const Header = (props) => {
  const { show } = props;

  const headerStyle = {
    background: show ? '#3d1f9a' : 'black',
    position: 'absolute',
    textAlign: 'center',
    borderRadius: '.4em',
    color: '#FFF',
    padding: '0.5em',
    margin: '0.5em',
    fontSize: '14px',
    transition: 'all 800ms ease',
    transform: show ? 'scale(1)' : 'scale(0)'
  };

  return (
    <header style={headerStyle}>
      <h1>
        Transiciones css  en linea
        <span role="img" aria-label="fire">
          🔥
        </span>
      </h1>
    </header>
  );
};

export default Header;