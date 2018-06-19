import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProtectedRoute extends React.Component {  
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        const Component = this.props.component;
        const path = this.props.path;
        return (
            isAuthenticated ?
                <Route path={path} render={(props) => {
                    return <Component {...props} />
                }} /> :
                <Redirect to="/login" />
        )
    }
}

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default ProtectedRoute;