import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../App';
import Login from './login/login'
import PrivateRoute from './privateRoute';
import myReducer from '../appRedux/reducers/index';

const store = createStore(myReducer);

class Controll extends Component{
    
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        {/*login page */}
                        <Route path='/login' component={Login}/>
                        {/* home page */}
                        <PrivateRoute path='/' component={App} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Controll;