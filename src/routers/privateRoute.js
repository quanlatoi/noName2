import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Authenticate from './authenticate';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        console.log(Authenticate.isAuthenticated()),
        Authenticate.isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
            }} />
    )} />    
)

export default PrivateRoute;