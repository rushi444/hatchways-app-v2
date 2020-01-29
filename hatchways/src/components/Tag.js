import React from 'react';
import styled from 'styled-components';

export const Tag = props => {
  return <SingleTag className='tag'>{props.tag}</SingleTag>;
};

const SingleTag = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 1rem; 
  padding: 0.2rem 0.5rem;
  background-color: lightgray;
  display: inline-block;
  width: auto;
  height: auto;
  text-align: center;
  border-radius: 7px;
`;
