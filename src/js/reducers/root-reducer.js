import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import userReducer from './user-reducer';
import rateReducer from './rates-reducer';
import taskReducer from './task-reducer';


const rootReducer = combineReducers({
    sessionReducer,
    authenticateReducer,
    userReducer,
    rateReducer,
    taskReducer
});

export default rootReducer;