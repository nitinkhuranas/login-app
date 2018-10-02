import {connect} from 'react-redux';
import Header from './header.jsx';
import * as authenticationActions from '../authentication/actions';
import * as authenticationSelectors from '../authentication/selectors';

function mapStateToProps(state) {
    return {
        userName: authenticationSelectors.getUserName(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogoutClick: function(){
            dispatch(authenticationActions.triggerLogoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);