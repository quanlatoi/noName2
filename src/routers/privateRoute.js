import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Authenticate from './authenticate';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        (props) => {
            Authenticate.a().then((res)=>{
                if(res === true){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname: '/login',
                            state: { from: props.location }
                        }
                    } />
                }
            })
        }
    } />    
)

export default PrivateRoute;