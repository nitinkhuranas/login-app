import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../login/container';
import Home from '../home/container';

const PrivateRoutes = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated ?
        <Component {...props} /> : 
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  )
}

function Routes(props) {
    return (
        <Router>
            <div>
                <Route path='/login' component={Login} />
                <Route exact path='/'component={Home}/>
            </div>
        </Router>
        );
}

export default Routes;