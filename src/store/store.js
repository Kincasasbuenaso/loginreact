import { createStore, combineReducers, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';


import { homeReducer } from '../reducers/homeReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    home: homeReducer,
    auth: authReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
    )
);