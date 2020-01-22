import axios from 'axios';

export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const getAllUsers = () => async dispatch => {
    try {
        let res = await axios.get('https://www.hatchways.io/api/assessment/students')
        dispatch({type: GET_ALL_USERS_SUCCESS, payload: res.data})
    } catch(err) {
        dispatch({ type: GET_ALL_USERS_FAILURE, payload(err)})
    }
}