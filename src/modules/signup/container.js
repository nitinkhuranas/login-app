import {connect} from 'react-redux';
import * as authenticationSelectors from '../authentication/selectors';
import * as authenticationActions from '../authentication/actions';
import Signup from './signup.jsx';

function mapStateToProps(state) {
    return {
        isAuthenticated: authenticationSelectors.getIsAuthenticated(state),
        signupMsg: authenticationSelectors.getSignupMsg(state),
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onSignupClick: function(name, email, password){
            dispatch(authenticationActions.doSignupUser(name, email, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);