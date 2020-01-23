import React, { useState } from 'react';
import styled from 'styled-components';
import {StudentExpandInfo} from './StudentExpandInfo'

export const Student = props => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const arrAvg = arr =>
    arr.reduce((a, b) => parseInt(a) + parseInt(b), 0) / arr.length;


  const StudentContainer = styled.div`
    border: 1px solid black;
    margin-top: 2rem;
    margin: auto;
    width: 80vh;
    display: inline-flex;
    height: auto;
  `;

  console.log('student tags',props.tags)

  return (
    <StudentContainer>
      <ProfilePicContainer>
        <ProfilePic src={props.student.pic} alt='new' />
      </ProfilePicContainer>
      <UserInfo>
        <UserTitle>
          <h1>
            {props.student.firstName} {props.student.lastName}
          </h1>
          <button onClick={toggleExpand}>{expand ? '-' : '+'}</button>
        </UserTitle>
        <h4>Email: {props.student.email}</h4>
        <h4>Company: {props.student.company}</h4>
        <h4>Skill: {props.student.skill}</h4>
        <h4>Average: {arrAvg(props.student.grades)}%</h4>
        {expand && <StudentExpandInfo student={props.student} tags={props.tags} expand={expand} />}
      </UserInfo>
    </StudentContainer>
  );
};

const ProfilePicContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  width: 25%;
  height: 50%;
`;

const ProfilePic = styled.img`
  height: 100px;
  border-radius: 50px;
  border: 1px solid gray;
`;

const UserInfo = styled.div`
  width: 70%;
  h4 {
    margin-top: 0.7em;
    margin-bottom: 0;
  }
  padding-bottom: 0.5em;
`;

const UserTitle = styled.div`
  display: inline-flex;
  width: 100%;
  h1 {
    line-height: 0px;
    width: 80%;
  }
  button {
    background-color: white;
    border: none;
    font-size: xx-large;
    color: gray;
  }
  button:focus {
    outline: none;
  }
`;

// .userContainer {
//     margin-top: 2rem;
//     margin: auto;
//     padding-bottom: 3rem;
//     width: 80vw;
//     height: 20vh;
//     display: inline-flex;

//   }

//   .expandUserContainer {
//     margin-top: 2rem;
//     margin: auto;
//     width: 80vw;
//     height: auto;
//     display: inline-flex;
//   }
