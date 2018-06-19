import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import userReducer from './user-reducer';
import rateReducer from './rates-reducer';


const rootReducer = combineReducers({
    sessionReducer,
    authenticateReducer,
    userReducer,
    rateReducer,
});

export default rootReducer;