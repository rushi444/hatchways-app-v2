import React from 'react';
import { SearchBars } from './components/SearchBars';
import styled from 'styled-components'; 

export const App = () => {
  return (
    <AppContainer>
      <SearchBars />
    </AppContainer>
  );
};

const AppContainer = styled.div`
margin: auto;
width: 75%; 
`


