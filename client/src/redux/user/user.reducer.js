import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: false,
  error: null,
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: true,
                error: null,
                loading: false
            };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: false,
                error: null,
                loading: false
            };

        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state,
                loading: true
            };
            
        default:
            return state;
    }
};

export default userReducer;