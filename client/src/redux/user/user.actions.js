import axios from 'axios';

import UserActionTypes from './user.types';


export const emailSignInStart = (credentials) => async dispatch => {
    dispatch({
        type: UserActionTypes.EMAIL_SIGN_IN_START
    });

    try {
        const res = await axios.post('/api/user/login', credentials);
        
        if(res.status !== 200) {
            dispatch({
                type: UserActionTypes.SIGN_IN_FAILURE,
                payload: 'Error!!!'
            });
        } else {
            //store JWT Token to browser session storage 
            //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
            //sessionStorage = persisted only in current tab
            
            localStorage.setItem('jwtToken', res.data.token);

            dispatch({
                type: UserActionTypes.SIGN_IN_SUCCESS
            });
        }

    } catch (error) {
        dispatch({
            type: UserActionTypes.SIGN_IN_FAILURE,
            payload: error
        });
    }
};

export const signOutStart = () => async dispatch => {
    dispatch({
        type: UserActionTypes.SIGN_OUT_START
    });
    
    try {
        
        localStorage.removeItem('jwtToken');

        dispatch({
            type: UserActionTypes.SIGN_OUT_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: UserActionTypes.SIGN_OUT_FAILURE
        });
    }
};