import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './js/routers/routers';
import RootStore from './js/stores/stores';
import registerServiceWorker from './registerServiceWorker';
import {sessionService} from 'redux-react-session';
import './css/index.css'

// Init the session service
sessionService.initSessionService(RootStore);


ReactDOM.render(
    <RootRouter store={RootStore}/>, 
    document.getElementById('root')
);
registerServiceWorker();