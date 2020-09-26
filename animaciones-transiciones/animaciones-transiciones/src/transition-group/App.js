import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

const App = () => {
  const [click, setClick] = useState(0);

  const increment = () => {
    setClick(click + 1);
  };

  const decrement = () => {
    setClick(click - 1);
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <div className="box">
        <TransitionGroup>
          <CSSTransition
            timeout={1000}
            classNames='fade'
            key={click}
          >
            <div>{click}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;