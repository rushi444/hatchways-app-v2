import {
  GET_ALL_STUDENTS_SUCCESS,
  GET_ALL_STUDENTS_FAILURE,
  ADD_TAG,
} from './actions';

const initialState = {
  students: null,
  idAndTags: [],
  fetchingUsersError: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload.students,
      };
    case GET_ALL_STUDENTS_FAILURE:
      return {
        ...state,
        fetchingUsersError: action.payload,
      };
    case ADD_TAG:
      return {
        ...state,
        idAndTags: [...state.idAndTags, action.payload],
      };
    default:
      return state;
  }
};
