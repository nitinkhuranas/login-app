import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../login/container';
import Home from '../home/container';
import Signup from '../signup/container';

function Routes(props) {
    return (
        <Router>
            <div>
                <Route path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/'component={Home} />
            </div>
        </Router>
        );
}

export default Routes;