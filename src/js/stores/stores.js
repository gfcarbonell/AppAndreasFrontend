import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

//Reducers
import rootReducer from '../reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default rootStore;