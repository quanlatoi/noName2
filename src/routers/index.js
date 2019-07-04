import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../App';
import Login from './login/login'
import PrivateRoute from './privateRoute';

class Controll extends Component{
    
    render(){
        return(
            <Router>
                <Switch>
                    {/*login page */}
                    <Route path='/login' component={Login}/>
                    {/* home page */}
                    <PrivateRoute path='/' component={App} />
                </Switch>
            </Router>
        )
    }
}

export default Controll;