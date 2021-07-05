import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
    .post('/login', credentials)
    .then(response => {
        console.log('login res...', response);
        localStorage.setItem('token', response.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
        return true;
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
      .get('/friends')
      .then(response => {
        console.log('Get Friends response', response);
          dispatch({
              type: FETCH_FRIENDS_SUCCESS,
              payload: response.data
          });
      })
      .catch(error => {
        console.log('Get Friends Err...', error);
          dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error });
      });
    };