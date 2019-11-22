import JobActionTypes from './job.types';

const INITIAL_STATE = {
    jobList: [],
    error: null,
    loading: false
};

const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JobActionTypes.JOB_CREATE_START:
        case JobActionTypes.JOB_FETCH_START:
        case JobActionTypes.JOB_DELETE_START:
            return {
                ...state,
                loading: true
            };
            
        case JobActionTypes.JOB_FETCH_SUCCESS:
            return {
                ...state,
                jobList: action.payload,
                error: false,
                loading: false
            };

        case JobActionTypes.JOB_CREATE_SUCCESS:
        case JobActionTypes.JOB_DELETE_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false
            };

        case JobActionTypes.JOB_FETCH_FAILURE:
        case JobActionTypes.JOB_CREATE_FAILURE:
        case JobActionTypes.JOB_DELETE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default jobReducer;