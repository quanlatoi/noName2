import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        (localStorage.getItem('token') && localStorage.getItem('profile') && localStorage.getItem('token').length > 0) ? (
            <Component {...props} />
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                state: { from: props.location }
            }}
            />
        )
        }
    />
)

export default PrivateRoute;