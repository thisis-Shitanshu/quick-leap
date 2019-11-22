import axios from 'axios';

import JobActionTypes from './job.types';

export const fetchJobs = () => async dispatch => {
    dispatch({
        type: JobActionTypes.JOB_FETCH_START
    });

    try {

        const api = '/api/jobs/all';

        const res = await axios.get( api );

        if(res.status !== 200) {

            dispatch({
                type: JobActionTypes.JOB_FETCH_FAILURE,
                payload: 'Error Fetching!!!'
            });

        } else {

            dispatch({
                type: JobActionTypes.JOB_FETCH_SUCCESS,
                payload: res.data
            });
        }
        
    } catch (error) {
        dispatch({
            type: JobActionTypes.JOB_FETCH_FAILURE,
            payload: error
        });
    }
};

export const createJob  = data => async dispatch => {
    dispatch({
        type: JobActionTypes.JOB_CREATE_START
    });

    try {

        const token = localStorage.getItem('jwtToken');
        if (!token) throw new Error('No Token');

        const api = '/api/jobs/create';

        const res = await axios.post( api, {
            ...data,
            token
        });

        if(res.status !== 200) {
            dispatch({
                type: JobActionTypes.JOB_CREATE_FAILURE,
                payload: 'Error Creating!!!'
            });
        } else {
            dispatch({
                type: JobActionTypes.JOB_CREATE_SUCCESS
            });

            window.location.reload();
        }
        
    } catch (error) {
        dispatch({
            type: JobActionTypes.JOB_CREATE_FAILURE,
            payload: error
        });
    }
};

export const deleteJob = data => async dispatch => {
    dispatch({
        type: JobActionTypes.JOB_DELETE_START
    });

    try {

        const token = localStorage.getItem('jwtToken');
        if (!token) throw new Error('No Token');

        const api = '/api/jobs/delete';

        const res = await axios.post( api, {
            ...data,
            token
        });

        if(res.status !== 200) {
            dispatch({
                type: JobActionTypes.JOB_DELETE_FAILURE,
                payload: 'Error Deleting!!!'
            });
        } else {
            dispatch({
                type: JobActionTypes.JOB_DELETE_SUCCESS
            });

            window.location.reload();
        }
        
    } catch (error) {
        dispatch({
            type: JobActionTypes.JOB_DELETE_FAILURE,
            payload: error
        });
    }
};