import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background:blue;
  text-align:center;
  border-radius:0.2em;
  color:#FFF;
  padding:0.3em;
  margin:0.3em;
  font-size:14px;
`;

const App = () => {
  return (
    <div>
      <Header>
        <h1>Styled components</h1>
      </Header>
    </div>
  );
};

export default App;