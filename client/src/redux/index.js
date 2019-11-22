import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import jobReducer from './jobs/job.reducer';

export default combineReducers({
    user: userReducer,
    job: jobReducer
});