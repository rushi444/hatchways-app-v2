import React from 'react';
import { Students } from './components/Students';
import { SearchBars } from './components/SearchBars';
import styled from 'styled-components'; 

export const App = () => {
  return (
    <AppContainer>
      <SearchBars />
      <Students />
    </AppContainer>
  );
};

const AppContainer = styled.div`
margin: auto;
width: 75%; 
`


