import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudents } from '../redux/actions';
import styled from 'styled-components';

export const SearchBars = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [searchTagText, setSearchTagText] = useState('');

  const onSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    dispatch(updateStudents(searchText));
  }, [searchText]);

  const onTagSearchTextChange = e => {
    setSearchTagText(e.target.value);
  };

//   useEffect(() => {
//     dispatch(updateStudents(searchText));
//   }, [searchTagText]);

  return (
    <>
      <SearchContainer>
        <SearchInput
          type='text'
          name='text'
          placeholder='search names here...'
          value={searchText}
          onChange={onSearchTextChange}
        />
      </SearchContainer>
      <SearchContainer>
        <SearchInput
          type='text'
          name='tagText'
          placeholder='search tags here...'
          value={searchTagText}
          onChange={onTagSearchTextChange}
        />
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.form`
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 3vh;
  border: none;
  border-bottom: 1px solid black;
  :focus {
    outline: none;
  }
`;
