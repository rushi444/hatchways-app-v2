import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from '../redux/actions';
import styled from 'styled-components';
import { Students } from './Students';

export const SearchBars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { students, idAndTags } = useSelector(state => ({
    students: state.students,
    idAndTags: state.idAndTags,
  }));

  const [searchText, setSearchText] = useState('');
  const [searchTagText, setSearchTagText] = useState('');

  const onSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const onTagSearchTextChange = e => {
    setSearchTagText(e.target.value);
  };

  const filterResults = (nameQuery, tagQuery) => {
    if (students && nameQuery.length > 0 && tagQuery === '') {
      let temp = [];
      students.forEach(student => {
        let fullname = `${student.firstName} ${student.lastName}`;
        fullname.toLowerCase().includes(nameQuery) && temp.push(student);
      });
      return temp;
    } else if (students && nameQuery === '' && tagQuery.length > 0) {
      let temp = [];
      students.forEach(student => {
        idAndTags.forEach(idAndTag => {
          student.id === idAndTag[0] &&
            idAndTag[1].toLowerCase().includes(tagQuery.toLowerCase()) &&
            temp.push(student);
        });
      });
      return temp;
    } else if (students && nameQuery.length > 0 && tagQuery.length > 0) {
      let temp = [];
      let tempNames = [];
      students.forEach(student => {
        let fullname = `${student.firstName} ${student.lastName}`;
        fullname.toLowerCase().includes(nameQuery.toLowerCase()) &&
          tempNames.push(student);
      });
      tempNames.forEach(tempStudent => {
        idAndTags.forEach(idAndTag => {
          tempStudent.id === idAndTag[0] &&
            idAndTag[1].toLowerCase().includes(tagQuery.toLowerCase()) &&
            temp.push(tempStudent);
        });
      });
      return temp;
    } else {
      return students;
    }
  };

  console.log('resultes', filterResults(searchText, searchTagText));

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
      <Students filteredStudents={filterResults(searchText, searchTagText)} />
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
