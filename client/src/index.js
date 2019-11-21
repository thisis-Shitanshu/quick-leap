import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.scss';
import App from './App';
import reducers from './redux/index';
import logger from 'redux-logger';

import axios from 'axios';
window.axios = axios;

const middlewares = [reduxThunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    reducers,
    {},
    applyMiddleware(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);