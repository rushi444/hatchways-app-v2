import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Student } from './Student';

export const Students = props => {
  const { idAndTags } = useSelector(state => ({
    idAndTags: state.idAndTags,
  }));

  return (
    <StudentsContainer>
      {props?.filteredStudents?.map(student => {
          const tags = idAndTags
            .filter(([id]) => id === student.id)
            .map(([, tag]) => tag);
          return (
            <Student
              student={student}
              tags={tags}
              key={student.id}
            />
          );
        })}
    </StudentsContainer>
  );
};

const StudentsContainer = styled.div``;
