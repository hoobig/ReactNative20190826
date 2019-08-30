import { combineReducers } from 'redux';
import IndexReducer from './IndexReducer';
import AppReducer from './AppReducer';

const allReducers = combineReducers({
    IndexReducer,
    AppReducer,
})

export default allReducers;