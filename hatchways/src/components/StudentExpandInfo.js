import React, { useState } from 'react';
import { Tag } from './Tag';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTag } from '../redux/actions';

export const StudentExpandInfo = props => {
  const dispatch = useDispatch();

  const [addTagText, setAddTagText] = useState('');

  const tags = props.tags;

  const addTagTextHandler = e => {
    setAddTagText(e.target.value);
  };

  const submitNewTag = e => {
    e.preventDefault();
    dispatch(addTag(props.student.id, addTagText));
    setAddTagText('');
  };

  return (
    <>
      <GradeList>
        {props.student.grades.map((score, index) => {
          return (
            <li key={index}>
              Test {index + 1} : {score}%
            </li>
          );
        })}
      </GradeList>
      {tags?.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}

      <form onSubmit={submitNewTag}>
        <TagInput
          id='add-tag-input'
          type='text'
          name='text'
          placeholder='Add a Tag...'
          value={addTagText}
          onChange={addTagTextHandler}
        />
      </form>
    </>
  );
};

const GradeList = styled.ul`
  list-style-type: none;
  font-weight: lighter;
  padding-left: 0;
`;

const TagInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  :focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;
