import React from 'react';

const Header = (props) => {
  const { show } = props;
  const estilo = `header ${show && 'header-active'} `;

  return (
    <header className={estilo}>
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