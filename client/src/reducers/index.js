import { combineReducers } from 'redux';
import itemReducer from './itemReducer'; //we can have as many reducers as possible

export default combineReducers({
    item: itemReducer
});

