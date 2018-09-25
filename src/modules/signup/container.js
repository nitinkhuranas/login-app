import {connect} from 'react-redux';
import Signup from './signup.jsx';
import * as actions from './actions';
import * as selectors from './selectors';

function mapStateToProps(state) {
    return {
        isSuccess: selectors.getIsSuccess(state),
        signupMsg: selectors.getSignupMsg(state),
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onSignupClick: function(name, email, password){
            dispatch(actions.doSignupUser(name, email, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);