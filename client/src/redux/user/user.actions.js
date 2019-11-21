import axios from 'axios';

import UserActionTypes from './user.types';


export const emailSignInStart = (credentials) => async dispatch => {
    try {
        dispatch({
            type: UserActionTypes.EMAIL_SIGN_IN_START
        });

        const res = await axios.post('/api/admin/login', credentials);

        dispatch({
            type: UserActionTypes.SIGN_IN_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: UserActionTypes.SIGN_IN_FAILURE,
            payload: error
        });
    }
};

export const signOutStart = () => async dispatch => {
    try {
        dispatch({
            type: UserActionTypes.SIGN_OUT_START
        });

        const res = await axios.post('/api/signout');

        dispatch({
            type: UserActionTypes.SIGN_OUT_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: UserActionTypes.SIGN_OUT_FAILURE
        });
    }
};