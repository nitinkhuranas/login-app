import {connect} from 'react-redux';
import * as authenticationSelectors from '../authentication/selectors';
import * as authenticationActions from '../authentication/actions';
import Login from './login.jsx';

function mapStateToProps(state) {
    return {
        isAuthenticated: authenticationSelectors.getIsAuthenticated(state),
        authenticationMsg: authenticationSelectors.getAuthenticationMsg(state),
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onLoginClick: function(email, password){
            dispatch(authenticationActions.triggerAuthorizeUser(email, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);