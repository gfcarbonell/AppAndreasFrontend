import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Main from '../pages/main';


const rooterConfig = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>
)

rooterConfig.propTypes = {
  store: PropTypes.object.isRequired
}

export default rooterConfig;