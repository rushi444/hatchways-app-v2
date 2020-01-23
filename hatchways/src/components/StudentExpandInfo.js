import React, { useState} from 'react';
import { Tag } from './Tag';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTag } from '../redux/actions';

export const StudentExpandInfo = props => {
  const dispatch = useDispatch();

  const [tagExpand, setTagExpand] = useState(false);
  const [addTagText, setAddTagText] = useState('');

const tags = props.tags;

  const toggleTagInput = () => {
    setTagExpand(!tagExpand);
  };

  const addTagTextHandler = e => {
    setAddTagText(e.target.value);
  };

  const submitNewTag = (e) => {
    e.preventDefault();
    dispatch(addTag(props.student.id, addTagText));
    setAddTagText('')
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
      {tags.length > 0 &&
        tags.map((tag, index) => <div key={index}>{tag}</div>)}
      <NewTagButton onClick={toggleTagInput}>new tag</NewTagButton>
      <form onSubmit={submitNewTag}>
        <input
          type='text'
          name='text'
          placeholder='add tags here...'
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

const NewTagButton = styled.button``;


