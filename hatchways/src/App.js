import React from 'react';
import { Dashboard } from './components/Dashboard'
import styled from 'styled-components'; 

export const App = () => {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
};

const AppContainer = styled.div`
margin: auto;
width: 60%; 
`


