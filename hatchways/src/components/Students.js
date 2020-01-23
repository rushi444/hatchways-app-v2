import React, { useState, useEffect } from 'react';
import { getAllStudents } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Student } from './Student';

export const Students = () => {
  const { students, idAndTags } = useSelector(state => ({
    students: state.students, idAndTags: state.idAndTags
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

idAndTags && console.log('idandtags', idAndTags);

  return (
    <StudentsContainer>
      {students &&
        students.map(student => {
          const tags = idAndTags
            .filter(([id]) => id === student.id)
            .map(([id, tag]) => tag);

          return (
          <Student
            student={student}
            tags={tags}
            key={student.id}
            tagSearchText={null}
            tagSearchHandler={null}
          />
        )})}
    </StudentsContainer>
  );
};

const StudentsContainer = styled.div``;
