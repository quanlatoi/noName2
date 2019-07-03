import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './menu/menu';
import App from '../App';
import Login from './login/login'

class Controll extends Component{
    render(){
        return(
            <Router>
                <Menu />
                <Switch>
                    {/*login page */}
                    <Route path='/login' component={Login} />
                    {/* home page */}
                    <Route path='/' component={App}  />
                </Switch>
            </Router>
        )
    }
}

export default Controll;