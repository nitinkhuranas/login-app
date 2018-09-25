import {connect} from 'react-redux';
import Login from './login.jsx';
import * as actions from './actions';
import * as selectors from './selectors';

function mapStateToProps(state) {
    return {
        isAuthenticated: selectors.getIsAuthenticated(state),
        authenticationMsg: selectors.getAuthenticationMsg(state),
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onLoginClick: function(email, password){
            dispatch(actions.triggerAuthorizeUser(email, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);