import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE } from './actions';

const initialState = {
  data: null,
  fetchingUsersError: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        fetchingUsersError: action.payload,
      };
    default:
      return state;
  }
};
