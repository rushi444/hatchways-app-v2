import axios from 'axios';

export const GET_ALL_STUDENTS_SUCCESS = 'GET_ALL_STUDENTS_SUCCESS';
export const GET_ALL_STUDENTS_FAILURE = 'GET_ALL_STUDENTS_FAILURE';

export const getAllStudents = () => async dispatch => {
  try {
    let res = await axios.get(
      'https://www.hatchways.io/api/assessment/students',
    );
    dispatch({ type: GET_ALL_STUDENTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_ALL_STUDENTS_FAILURE, payload: err });
  }
};

export const UPDATE_STUDENTS = 'UPDATE_STUDENTS';

export const updateStudents = searchTerm => dispatch => {
  try {
    dispatch({ type: UPDATE_STUDENTS, payload: searchTerm });
  } catch (err) {
    console.log(err);
  }
};

export const ADD_TAG = 'ADD_TAG';

export const addTag = (id, tag) => dispatch => {
    dispatch({ type: ADD_TAG, payload: [id, tag] });
}
